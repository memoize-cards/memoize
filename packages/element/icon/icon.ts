import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("memo-icon")
@paint(component, style)
class Icon extends HTMLElement {
  #color;
  #use;

  get color() {
    return (this.#color ??= "primary");
  }

  @attributeChanged("color")
  @repaint
  set color(value) {
    this.#color = value;
  }

  get use() {
    return (this.#use ??= "");
  }

  @attributeChanged("use")
  @repaint
  set use(value) {
    this.#use = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Icon;
