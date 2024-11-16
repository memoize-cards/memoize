import { attributeChanged, connected, define } from "directive";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("memo-chart")
@paint(component, style)
class Chart extends HTMLElement {
  #learn;
  #relearn;
  #review;

  get learn() {
    return (this.#learn ??= 0);
  }

  @attributeChanged("learn")
  set learn(value) {
    this.#learn = value;
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

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Chart;
