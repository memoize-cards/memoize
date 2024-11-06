import { attributeChanged, define } from "directive";
import { booleanAttribute } from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import on, { stop } from "standard/event";
import joinCut from "standard/joinCut";
import component from "./component";
import { dispatchFormAction, setState } from "./interfaces";
import style from "./style";

@define("memo-button")
@paint(component, style)
class Button extends Echo(HTMLElement) {
  #color;
  #internals;
  #type;
  #value;
  #variant;
  #width;

  get color() {
    return (this.#color ??= "primary");
  }

  @attributeChanged("color")
  @repaint
  set color(value) {
    this.#color = value;
  }

  get type() {
    return (this.#type ??= "submit");
  }

  @attributeChanged("type")
  @repaint
  set type(value) {
    this.#type = value;
  }

  get value() {
    return this.#value;
  }

  @attributeChanged("value")
  @repaint
  set value(value) {
    this.#value = value;
  }

  get variant() {
    return (this.#variant ??= "solid");
  }

  @attributeChanged("variant")
  @joinCut(setState)
  set variant(value) {
    this.#variant = value;
  }

  get width() {
    return (this.#width ??= "auto");
  }

  @attributeChanged("width")
  @repaint
  set width(value) {
    this.#width = value;
  }

  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  @on.click(":host button", stop)
  @dispatchEvent("click")
  click() {
    switch (this.type) {
      case "submit":
        this.#internals.form?.requestSubmit();
        break;
      case "reset":
        this.#internals.form?.reset();
        break;
    }
    return this.value;
  }

  [setState](variant) {
    this.#internals.states.delete(variant);
    this.#internals.states.add(variant);
    return this;
  }
}

export default Button;
