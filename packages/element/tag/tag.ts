import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("m-tag")
@paint(component, style)
class Tag extends HTMLElement {
  #color;

  get color() {
    return (this.#color ??= "primary");
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

export default Tag;
