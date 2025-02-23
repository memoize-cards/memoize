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

  get hidden() {
    return this.time === "" && this.total === 0;
  }

  get time() {
    return timeUntilReview(this.#card?.validity);
  }

  get total() {
    return this.#card.total;
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
