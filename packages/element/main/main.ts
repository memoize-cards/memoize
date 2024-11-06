import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("memo-main")
@paint(component, style)
class Main extends HTMLElement {
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

export default Main;
