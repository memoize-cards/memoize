import { define } from "directive";
import User from "oauth/forgotPassword";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { stop } from "standard/event";
import { args } from "standard/router";
import component from "./component";
import Navigate from "./navigate";

@define("memo-email-verification")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host #openEmailApp", stop)
  openEmailApp() {
    const [, url] = args.email.split("@");
    Navigate.goToEmailProvider(url);
    return this;
  }

  @on.click(":host #resend", stop)
  async resend() {
    await User.resetPasswordForEmail(args.email);
    return this;
  }
}

export default OAuth;
