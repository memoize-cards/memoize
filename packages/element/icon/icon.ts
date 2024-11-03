import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import on from "standard/event";
import component from "./component";
import style from "./style";

@define("memo-icon")
@paint(component, style)
class Icon extends Echo(HTMLElement) {
  #use;

  get use() {
    return (this.#use ??= "");
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

  @on.click(":host *")
  click() {
    const init = { bubbles: true, composed: true, cancelable: true };
    const event = new CustomEvent("click", init);
    this.dispatchEvent(event);
    return this;
  }
}

export default Icon;
