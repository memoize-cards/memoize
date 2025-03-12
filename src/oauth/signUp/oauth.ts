import { define } from "directive";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import * as Navigate from "standard/navigate";
import component from "./component";
import User from "./user";

@define("m-sign-up")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit(":host m-form", stop, detail)
  async create(data) {
    const user = await User.signUp(data);
    user && Navigate.goToDashboard();
    return this;
  }
}

export default OAuth;
