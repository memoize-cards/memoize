import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import on, { stop } from "standard/event";
import component from "./component";
import style from "./style";

@define("memo-link")
@paint(component, style)
class Text extends Echo(HTMLElement) {
  #color;
  #family;
  #href;
  #lineHeight;
  #size;
  #value;
  #weight;

  get color() {
    return (this.#color ??= "primary");
  }

  @attributeChanged("color")
  @repaint
  set color(value) {
    this.#color = value;
  }

  get family() {
    return (this.#family ??= "base");
  }

  @attributeChanged("family")
  @repaint
  set family(value) {
    this.#family = value;
  }

  get href() {
    return this.#href;
  }

  @attributeChanged("href")
  set href(value) {
    this.#href = value;
  }

  get lineHeight() {
    return (this.#lineHeight ??= "lg");
  }

  @attributeChanged("line-height")
  @repaint
  set lineHeight(value) {
    this.#lineHeight = value;
  }

  get size() {
    return (this.#size ??= "xxs");
  }

  @attributeChanged("size")
  @repaint
  set size(value) {
    this.#size = value;
  }

  get value() {
    return this.#value;
  }

  @attributeChanged("value")
  set value(value) {
    this.#value = value;
  }

  get weight() {
    return (this.#weight ??= "medium");
  }

  @attributeChanged("weight")
  @repaint
  set weight(value) {
    this.#weight = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host *", stop)
  @dispatchEvent("click")
  click() {
    this.href && history.pushState({}, "", this.href);
    return this.value;
  }
}

export default Text;
