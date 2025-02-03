import { define } from "directive";
import { paint } from "standard/dom";
import on, { detail, prevent, stop } from "standard/event";
import component from "./component";
import Navigate from "./navigate";
import style from "./style";
import User from "./user";

@define("memo-sign-in")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("memo-form", prevent, detail)
  async logIn(data) {
    const user = await User.signInWithPassword(data);
    user && Navigate.goToDashboard();
    return this;
  }

  @on.click("#logInWithGoogle", stop)
  async logInWithGoogle() {
    await User.signInWithOAuth();
    return this;
  }
}

export default OAuth;
