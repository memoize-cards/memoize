import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("memo-stack")
@paint(component, style)
class Stack extends HTMLElement {
  #align;
  #direction;
  #justify;
  #spacing;

  get align() {
    return (this.#align ??= "stretch");
  }

  @attributeChanged("align")
  set align(value) {
    this.#align = value;
  }

  get direction() {
    return (this.#direction ??= "row");
  }

  @attributeChanged("direction")
  set direction(value) {
    this.#direction = value;
  }

  get justify() {
    return (this.#justify ??= "flex-start");
  }

  @attributeChanged("justify")
  set justify(value) {
    this.#justify = value;
  }

  get spacing() {
    return (this.#spacing ??= "xs");
  }

  @attributeChanged("spacing")
  set spacing(value) {
    this.#spacing = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Stack;
