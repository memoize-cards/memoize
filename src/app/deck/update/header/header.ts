import { define } from "directive";
import { paint, repaint, willPaint } from "standard/dom";
import on, { stop } from "standard/event";
import component from "./component";
import Deck from "./deck";
import { hydrate } from "./interfaces";
import Navigate from "./navigate";

@define("m-edit-deck-header")
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

  @on.click("#delete", stop)
  async delete() {
    await this.deck.delete();
    Navigate.goToDashboard();
    return this;
  }

  @on.click("#pause", stop)
  @repaint
  async pause() {
    await this.deck.pause();
    return this;
  }

  @on.click("#play", stop)
  @repaint
  async play() {
    await this.deck.play();
    return this;
  }

  @willPaint
  async [hydrate]() {
    this.#deck = await Deck.current();
    return this;
  }
}

export default Header;
