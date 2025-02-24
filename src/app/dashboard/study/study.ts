import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import Card from "./card";
import component from "./component";
import { hydrate } from "./interfaces";
import style from "./style";
import timeUntilReview from "./timeUntilReview";
import User from "./user";

@define("memo-dashboard-study")
@paint(component, style)
class Study extends HTMLElement {
  #card;
  #user;

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
    this.#user = await User.logged();
    this.#card = await Card.from(this.#user.id);
    return this;
  }
}

export default Study;
