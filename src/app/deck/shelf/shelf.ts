import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import Card from "./card";
import component from "./component";
import { hydrate } from "./interfaces";
import style from "./style";

@define("m-deck-shelf")
@paint(component, style)
class Shelf extends HTMLElement {
  #cards;

  get cards() {
    return (this.#cards ??= []);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#cards = await Card.current();
    return this;
  }
}

export default Shelf;
