import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("m-box")
@paint(component, style)
class Box extends HTMLElement {
  #background;
  #spacing;

  get background() {
    return (this.#background ??= "master-lighter");
  }

  @attributeChanged("background")
  @repaint
  set background(value) {
    this.#background = value;
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
}

export default Box;
