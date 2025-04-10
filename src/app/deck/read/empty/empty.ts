import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import Cards from "./cards";
import component from "./component";
import { hydrate } from "./interfaces";
import style from "./style";

@define("m-deck-empty")
@paint(component, style)
class Empty extends HTMLElement {
  #cards;

  get cards() {
    return (this.#cards ??= {});
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#cards = await Cards.current();
    return this;
  }
}

export default Empty;
