import { define } from "directive";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import component from "./component";
import Navigate from "./navigate";
import User from "./user";

@define("m-forgot-password")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit(":host m-form", stop, detail)
  async reset(data) {
    const { email } = data;
    const user = await User.resetPasswordForEmail(email);
    user && Navigate.goToEmailVerification(email);
    return this;
  }
}

export default OAuth;
