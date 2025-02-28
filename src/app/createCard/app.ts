import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import { params } from "standard/router";
import Card from "./card";
import component from "./component";
import Deck from "./deck";
import { hydrate } from "./interfaces";
import Navigate from "./navigate";
import style from "./style";
import User from "./user";

@define("m-create-card")
@paint(component, style)
class App extends HTMLElement {
  #deck;
  #user;

  get deck() {
    return (this.#deck ??= {});
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("m-form", stop, detail)
  async create(data) {
    const { deck } = params;
    const user = await User.logged();
    const card = Card.from(data, deck, user.id);
    await card.create();
    Navigate.goToCard(deck, card.id);
    return this;
  }

  @willPaint
  async [hydrate]() {
    this.#user = await User.logged();
    this.#deck = await Deck.from(params.deck, this.#user.id);
    return this;
  }
}

export default App;
