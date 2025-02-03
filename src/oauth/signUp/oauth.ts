import { define } from "directive";
import Navigate from "oauth/signIn/navigate";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import component from "./component";
import User from "./user";

@define("memo-sign-up")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit(":host memo-form", stop, detail)
  async create(data) {
    const user = await User.signUp(data);
    user && Navigate.goToDashboard();
    return this;
  }
}

export default OAuth;
