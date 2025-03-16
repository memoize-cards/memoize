import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import { hydrate } from "standard/interface";
import Cards from "./cards";
import component from "./component";
import style from "./style";
import timeUntilReview from "./timeUntilReview";

@define("m-dashboard-study")
@paint(component, style)
class Study extends HTMLElement {
  #card;

  get shouldHide() {
    return this.nextReviewIn === "" && this.pendingCards === 0;
  }

  get nextReviewIn() {
    return timeUntilReview(this.#card.nextReviewDate);
  }

  get pendingCards() {
    return this.#card.totalReviewCards;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#card = await Cards.reviewStats();
    return this;
  }
}

export default Study;
