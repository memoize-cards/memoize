import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("memo-avatar")
@paint(component, style)
class Avatar extends HTMLElement {
  #alt;
  #loading;
  #src;

  get alt() {
    return (this.#alt ??= "");
  }

  @attributeChanged("alt")
  @repaint
  set alt(value) {
    this.#alt = value;
  }

  get loading() {
    return (this.#loading ??= "lazy");
  }

  @attributeChanged("loading")
  @repaint
  set loading(value) {
    this.#loading = value;
  }

  get src() {
    return (this.#src ??= "");
  }

  @attributeChanged("src")
  @repaint
  set src(value) {
    this.#src = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Avatar;
