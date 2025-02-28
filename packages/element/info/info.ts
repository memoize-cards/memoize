import { define } from "directive";
import { paint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("m-info")
@paint(component, style)
class Info extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Info;
