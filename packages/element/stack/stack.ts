import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import component from "./component";
import style from "./style";

@define("memo-stack")
@paint(component, style)
class Stack extends Echo(HTMLElement) {
  #direction;
  #spacing;

  get direction() {
    return (this.#direction ??= "row");
  }

  @attributeChanged("direction")
  @dispatchEvent("direction")
  set direction(value) {
    this.#direction = value;
  }

  get spacing() {
    return (this.#spacing ??= "xs");
  }

  @attributeChanged("spacing")
  @dispatchEvent("spacing")
  set spacing(value) {
    this.#spacing = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Stack;
