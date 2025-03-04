import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("m-show")
@paint(component, style)
class Show extends HTMLElement {
  #when;

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
