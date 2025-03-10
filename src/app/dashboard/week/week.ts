import { define } from "directive";
import { paint } from "standard/dom";
import component from "./component";
import getWeekDays from "./getWeekDays";
import style from "./style";

@define("m-dashboard-week")
@paint(component, style)
class Week extends HTMLElement {
  get days() {
    return getWeekDays();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Week;
