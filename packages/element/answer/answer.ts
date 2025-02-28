import { define } from "directive";
import { paint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("m-answer")
@paint(component, style)
class Answer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Answer;
