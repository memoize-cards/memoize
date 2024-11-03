import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import component from "./component";
import style from "./style";

@define("memo-icon")
@paint(component, style)
class Icon extends Echo(HTMLElement) {
  #use;

  get use() {
    return (this.#use ??= "language");
  }

  @attributeChanged("use")
  @dispatchEvent("use")
  @repaint
  set use(value) {
    this.#use = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Icon;
