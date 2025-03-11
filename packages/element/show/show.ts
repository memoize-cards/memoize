import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("m-show")
@paint(component, style)
class Show extends HTMLElement {
  #align;
  #justify;
  #when;

  get align() {
    return (this.#align ??= "start");
  }

  @attributeChanged("align")
  @repaint
  set align(value) {
    this.#align = value;
  }

  get display() {
    return this.when ? "flex" : "none";
  }

  get justify() {
    return (this.#justify ??= "flex-start");
  }

  @attributeChanged("justify")
  @repaint
  set justify(value) {
    this.#justify = value;
  }

  get when() {
    return (this.#when ??= false);
  }

  @attributeChanged("when", booleanAttribute)
  @repaint
  set when(value) {
    this.#when = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}
