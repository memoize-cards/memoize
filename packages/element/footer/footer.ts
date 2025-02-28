import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("m-footer")
@paint(component, style)
class Footer extends HTMLElement {
  #color;

  get color() {
    return (this.#color ??= "master-lightest");
  }

  @attributeChanged("color")
  @repaint
  set color(value) {
    this.#color = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Footer;
