import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import Echo from "standard/echo";
import on from "standard/event";
import joinCut from "standard/joinCut";
import component from "./component";
import { setDisplay } from "./interfaces";
import style from "./style";

@define("memo-text")
@paint(component, style)
class Text extends Echo(HTMLElement) {
  #display;
  #hidden;
  #size;
  #weight;

  get display() {
    return (this.#display ??= false);
  }

  @attributeChanged("display", booleanAttribute)
  @repaint
  set display(value) {
    this.#display = value;
  }

  get hidden() {
    return (this.#hidden ??= false);
  }

  @attributeChanged("hidden", booleanAttribute)
  @joinCut(setDisplay)
  set hidden(value) {
    this.#hidden = value;
  }

  get size() {
    return this.display
      ? `display-${(this.#size ??= "sm")}`
      : (this.#size ??= "sm");
  }

  @attributeChanged("size")
  @repaint
  set size(value) {
    this.#size = value;
  }

  get weight() {
    return (this.#weight ??= "regular");
  }

  @attributeChanged("weight")
  @repaint
  set weight(value) {
    this.#weight = value;
  }

  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  [setDisplay]() {
    this.hidden
      ? this.style.setProperty("display", "none")
      : this.style.removeProperty("display");
    return this;
  }
}

export default Text;
