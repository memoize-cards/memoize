import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { didPaint, paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import component from "./component";
import { setDisplay } from "./interfaces";
import style from "./style";

@define("memo-answer")
@paint(component, style)
class Answer extends Echo(HTMLElement) {
  #align;
  #direction;
  #hidden;
  #justify;
  #spacing;

  get align() {
    return (this.#align ??= "start");
  }

  @attributeChanged("align")
  @repaint
  set align(value) {
    this.#align = value;
  }

  get direction() {
    return (this.#direction ??= "row");
  }

  @attributeChanged("direction")
  @repaint
  set direction(value) {
    this.#direction = value;
  }

  get hidden() {
    return (this.#hidden ??= false);
  }

  @attributeChanged("hidden", booleanAttribute)
  @repaint
  set hidden(value) {
    this.#hidden = value;
  }

  get justify() {
    return (this.#justify ??= "flex-start");
  }

  @attributeChanged("justify")
  @repaint
  set justify(value) {
    this.#justify = value;
  }

  get spacing() {
    return (this.#spacing ??= "xs");
  }

  @attributeChanged("spacing")
  @repaint
  set spacing(value) {
    this.#spacing = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @didPaint
  [setDisplay]() {
    this.hidden
      ? this.style.setProperty("display", "none")
      : this.style.removeProperty("display");
    return this;
  }
}

export default Answer;
