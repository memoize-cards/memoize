import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import component from "./component";
import Deck from "./deck";
import { hydrate } from "./interfaces";
import style from "./style";
import User from "./user";

@define("memo-dashboard")
@paint(component, style)
class App extends HTMLElement {
  #decks;
  #user;

  get decks() {
    return (this.#decks ??= []);
  }

  get user() {
    return this.#user;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#user = await User.logged();
    this.#decks = await Deck.from(this.#user.id);
    return this;
  }
}

export default App;
