import { define } from "directive";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { stop } from "standard/event";
import { args, urlFor } from "standard/router";
import component from "./component";

@define("memo-password-reseted")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default OAuth;
