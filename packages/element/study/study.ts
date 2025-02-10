import { attributeChanged, define } from "directive";
import { paint, repaint, willPaint } from "standard/dom";
import on, { stop } from "standard/event";
import Card from "./card";
import component from "./component";
import { hydrate } from "./interfaces";
import Navigate from "./navigate";
import style from "./style";
import timeUntilReview from "./timeUntilReview";

@define("memo-study")
@paint(component, style)
class Study extends HTMLElement {
  #card;
  #deckId;
  #userId;

  @attributeChanged("deck-id")
  @repaint
  set deck(value) {
    this.#deckId = value;
  }

  @attributeChanged("user-id")
  @repaint
  set user(value) {
    this.#userId = value;
  }

  get value() {
    return timeUntilReview(this.#card?.validity);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host button", stop)
  click() {
    Navigate.goToCard(this.#deckId);
    return this;
  }

  @willPaint
  async [hydrate]() {
    this.#card = await Card.from(this.#deckId, this.#userId);
    return this;
  }
}

export default Study;
