import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint, repaint, willPaint } from "standard/dom";
import component from "./component";
import { setDisplay } from "./interfaces";

@define("m-hide")
@paint(component)
class Hide extends HTMLElement {
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

  @willPaint
  [setDisplay]() {
    this.when
      ? this.style.setProperty("display", "none")
      : this.style.removeProperty("display");
    return this;
  }
}
