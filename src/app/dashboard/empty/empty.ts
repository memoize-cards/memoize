import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import component from "./component";
import Decks from "./decks";
import { hydrate } from "./interfaces";
import style from "./style";
import User from "./user";

@define("memo-dashboard-empty")
@paint(component, style)
class Empty extends HTMLElement {
  #decks;
  #user;

  get decks() {
    return (this.#decks ??= {});
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#user = await User.logged();
    this.#decks = await Decks.from(this.#user.id);
    return this;
  }
}

export default Empty;
