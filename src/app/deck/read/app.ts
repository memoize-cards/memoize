import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import { params } from "standard/router";
import component from "./component";
import Deck from "./deck";
import { hydrate } from "./interfaces";
import style from "./style";

@define("m-deck")
@paint(component, style)
class App extends HTMLElement {
  #deck;

  get deck() {
    return (this.#deck ??= []);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#deck = await Deck.current();
    return this;
  }
}

export default App;
