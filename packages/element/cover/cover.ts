import { attributeChanged, define } from "directive";
import { paint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("memo-cover")
@paint(component, style)
class Cover extends HTMLElement {
  #alt;
  #aspect;
  #src;

  get alt() {
    return (this.#alt ??= "Memoize");
  }

  @attributeChanged("alt")
  set alt(value) {
    this.#alt = value;
  }

  get aspect() {
    return (this.#aspect ??= "square");
  }

  @attributeChanged("aspect")
  set aspect(value) {
    this.aspect = value;
  }

  get src() {
    return (this.#src ??= "");
  }

  @attributeChanged("src")
  set src(value) {
    this.#src = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Cover;
