import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import component from "./component";
import Deck from "./deck";
import { hydrate } from "./interfaces";

@define("m-deck-header")
@paint(component)
class Header extends HTMLElement {
  #deck;

  get deck() {
    return (this.#deck ??= {});
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

export default Header;
