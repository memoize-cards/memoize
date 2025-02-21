import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { stop } from "standard/event";
import Card from "./card";
import component from "./component";
import { hydrate } from "./interfaces";
import Navigate from "./navigate";
import style from "./style";
import timeUntilReview from "./timeUntilReview";
import User from "./user";

@define("memo-dashboard-study")
@paint(component, style)
class Study extends HTMLElement {
  #card;
  #user;

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

  @on.click(":host button", stop)
  click() {
    Navigate.goToCard();
    return this;
  }

  @willPaint
  async [hydrate]() {
    this.#user = await User.logged();
    this.#card = await Card.from(this.#user.id);
    return this;
  }
}

export default Study;
