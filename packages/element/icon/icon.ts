import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import on, { stop } from "standard/event";
import component from "./component";
import style from "./style";

@define("memo-icon")
@paint(component, style)
class Icon extends Echo(HTMLElement) {
  #use;
  #value;

  get use() {
    return (this.#use ??= "");
  }

  @attributeChanged("use")
  @repaint
  set use(value) {
    this.#use = value;
  }

  get value() {
    return this.#value;
  }

  @attributeChanged("value")
  @repaint
  set value(value) {
    this.#value = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("*", stop)
  @dispatchEvent("click")
  click() {
    return this.value;
  }
}

export default Icon;
