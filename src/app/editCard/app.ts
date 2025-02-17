import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import { params } from "standard/router";
import Card from "./card";
import component from "./component";
import { hydrate } from "./interfaces";
import Navigate from "./navigate";
import style from "./style";
import User from "./user";

@define("memo-edit-card")
@paint(component, style)
class App extends HTMLElement {
  #card;
  #user;

  get card() {
    return (this.#card ??= {});
  }

  get deck() {
    return params.deck;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("#deleteCard", stop)
  async delete() {
    await this.#card.delete();
    Navigate.goToDeck(this.deck);
    return this;
  }

  @on.submit("memo-form", stop, detail)
  async update(data) {
    await this.#card.merge(data).update();
    Navigate.goToDeck(this.deck);
    return this;
  }

  @willPaint
  async [hydrate]() {
    this.#user = await User.logged();
    this.#card = await Card.from(params.card, this.#user.id);
    return this;
  }
}

export default App;
