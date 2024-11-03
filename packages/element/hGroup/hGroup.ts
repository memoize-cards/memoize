import { attributeChanged, define } from "directive";
import { paint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import component from "./component";
import style from "./style";

@define("memo-hgroup")
@paint(component, style)
class HGroup extends HTMLElement {
  #align;

  get align() {
    return (this.#align ??= "left");
  }

  @attributeChanged("align")
  @dispatchEvent("align")
  set align(value) {
    this.#align = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default HGroup;
