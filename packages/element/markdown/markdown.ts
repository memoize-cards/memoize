import { define } from "directive";
import { paint } from "standard/dom";
import component from "./component";
import highlight from "./highlight";
import style from "./style";

@define("m-markdown")
@paint(component, style, highlight)
class Markdown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Markdown;
