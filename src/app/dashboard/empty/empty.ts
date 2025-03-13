import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import { hydrate } from "standard/interface";
import component from "./component";
import Decks from "./decks";
import style from "./style";

@define("m-dashboard-empty")
@paint(component, style)
class Empty extends HTMLElement {
  #decks;

  get decks() {
    return (this.#decks ??= {});
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#decks = await Decks.ofUserLogged();
    return this;
  }
}

export default Empty;
