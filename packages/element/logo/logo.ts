import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint } from "standard/dom";
import joinCut from "standard/joinCut";
import component from "./component";
import { setState } from "./interfaces";
import style from "./style";

@define("m-logo")
@paint(component, style)
class Logo extends HTMLElement {
  #internals;
  #onColor;

  get onColor() {
    return (this.#onColor ??= false);
  }

  @attributeChanged("on-color", booleanAttribute)
  @joinCut(setState)
  set onColor(value) {
    this.#onColor = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  [setState]() {
    this.onColor
      ? this.#internals.states.add("oncolor")
      : this.#internals.states.delete("oncolor");
    return this;
  }
}

export default Logo;
