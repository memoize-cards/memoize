import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import { params } from "standard/router";
import component from "./component";
import Deck from "./deck";
import { hydrate } from "./interfaces";
import Navigate from "./navigate";
import style from "./style";
import User from "./user";

@define("m-edit-deck")
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

  @on.click("#deleteDeck", stop)
  async delete() {
    await this.#deck.delete();
    Navigate.goToDashboard();
    return this;
  }

  @on.submit("m-form", stop, detail)
  async update(data) {
    await this.#deck.merge(data).update();
    Navigate.goToDeck(this.#deck.id);
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
