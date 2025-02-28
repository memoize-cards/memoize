import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import component from "./component";
import style from "./style";

@define("m-header")
@paint(component, style)
class Header extends HTMLElement {
  #color;

  get color() {
    return (this.#color ??= "master-lightest");
  }

  @attributeChanged("color")
  @dispatchEvent("color")
  @repaint
  set color(value) {
    this.#color = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Header;
