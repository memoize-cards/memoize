import { define } from "directive";
import attributeChanged, {
  booleanAttribute,
  resizing,
} from "directive/attributeChanged";
import { didPaint, paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import on from "standard/event";
import component from "./component";
import { setDisplay } from "./interfaces";
import style from "./style";

@define("m-stack")
@paint(component, style)
class Stack extends Echo(HTMLElement) {
  #align;
  #direction;
  #height;
  #hidden;
  #justify;
  #spacing;
  #width;

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

  get height() {
    return (this.#height ??= "auto");
  }

  @attributeChanged("height", resizing)
  @repaint
  set height(value) {
    this.#height = value;
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

  get width() {
    return (this.#width ??= "100%");
  }

  @attributeChanged("width", resizing)
  @repaint
  set width(value) {
    this.#width = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("*")
  @dispatchEvent("click")
  click() {
    return this;
  }

  @didPaint
  [setDisplay]() {
    this.hidden
      ? this.style.setProperty("display", "none")
      : this.style.removeProperty("display");
    return this;
  }
}

export default Stack;
