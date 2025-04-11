import { define } from "directive";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { stop } from "standard/event";
import * as Navigate from "standard/navigate";
import Cache from "./cache";
import component from "./component";
import User from "./user";

@define("m-sign-out")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("#logOut", stop)
  async logOut() {
    await User.signOut();
    Cache.clear();
    Navigate.goToSignIn();
    return this;
  }
}

export default OAuth;
