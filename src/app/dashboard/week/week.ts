import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import { hydrate } from "standard/interface";
import component from "./component";
import Habit from "./habit";
import style from "./style";

@define("m-dashboard-week")
@paint(component, style)
class Week extends HTMLElement {
  #habit;

  get habit() {
    return (this.#habit ??= []);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#habit = await Habit.now();
    return this;
  }
}

export default Week;
