import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import Echo from "standard/echo";
import component from "./component";
import style from "./style";

@define("m-cover")
@paint(component, style)
class Cover extends Echo(HTMLElement) {
  #alt;
  #aspect;
  #src;

  get alt() {
    return (this.#alt ??= "Memoize");
  }

  @attributeChanged("alt")
  @repaint
  set alt(value) {
    this.#alt = value;
  }

  get aspect() {
    return (this.#aspect ??= "square");
  }

  @attributeChanged("aspect")
  @repaint
  set aspect(value) {
    this.#aspect = value;
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

export default Cover;
