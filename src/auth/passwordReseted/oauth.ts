import { define } from "directive";
import User from "oauth/forgotPassword/user";
import style from "oauth/signIn/style";
import { paint, willPaint } from "standard/dom";
import { hydrate } from "standard/interface";
import * as Navigate from "standard/navigate";
import component from "./component";

@define("m-password-reseted")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    if (await User.isItAuthenticated()) Navigate.goToDashboard();
    return this;
  }
}

export default OAuth;
