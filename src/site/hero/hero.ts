import { define } from "directive";
import { paint } from "standard/dom";
import Echo from "standard/echo";
import component from "./component";
import style from "./style";

@define("memo-hero")
@paint(component, style)
class Hero extends Echo(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}
