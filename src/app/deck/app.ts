import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import { params } from "standard/router";
import component from "./component";
import Deck from "./deck";
import { hydrate } from "./interfaces";
import style from "./style";
import User from "./user";

@define("memo-deck")
@paint(component, style)
class App extends HTMLElement {
  #deck;
  #user;

  get deck() {
    return (this.#deck ??= []);
  }

  get user() {
    return (this.#user ??= {});
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#user = await User.logged();
    this.#deck = await Deck.from(params.deck, this.#user.id);
    return this;
  }
}

export default App;
