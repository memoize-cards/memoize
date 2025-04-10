import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import Card from "./card";
import component from "./component";
import { hydrate } from "./interfaces";
import Navigate from "./navigate";
import style from "./style";

@define("m-edit-card")
@paint(component, style)
class App extends HTMLElement {
  #card;

  get card() {
    return (this.#card ??= {});
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("m-form", stop, detail)
  async update(data) {
    await this.card.update(data);
    Navigate.goToDeck();
    return this;
  }

  @willPaint
  async [hydrate]() {
    this.#card = await Card.current();
    return this;
  }
}

export default App;
