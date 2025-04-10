import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import component from "./component";
import Deck from "./deck";
import { hydrate } from "./interfaces";
import Navigate from "./navigate";
import style from "./style";

@define("m-edit-deck")
@paint(component, style)
class App extends HTMLElement {
  #deck;

  get deck() {
    return (this.#deck ??= {});
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("m-form", stop, detail)
  async update(data) {
    await this.deck.update(data);
    Navigate.goToDeck();
    return this;
  }

  @willPaint
  async [hydrate]() {
    this.#deck = await Deck.current();
    return this;
  }
}

export default App;
