import { define } from "directive";
import { paint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("memo-markdown")
@paint(component, style)
class Markdown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Markdown;
