import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("m-avatar")
@paint(component, style)
class Avatar extends HTMLElement {
  #alt;
  #learn;
  #loading;
  #src;
  #relearn;
  #review;

  get alt() {
    return (this.#alt ??= "");
  }

  @attributeChanged("alt")
  @repaint
  set alt(value) {
    this.#alt = value;
  }

  get learn() {
    return (this.#learn ??= 0);
  }

  @attributeChanged("learn")
  set learn(value) {
    this.#learn = value;
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

  get relearn() {
    return (this.#relearn ??= 0);
  }

  @attributeChanged("relearn")
  set relearn(value) {
    this.#relearn = value;
  }

  get review() {
    return (this.#review ??= 0);
  }

  @attributeChanged("review")
  set review(value) {
    this.#review = value;
  }

  get total() {
    return Number(this.learn + this.relearn + this.review);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Avatar;
