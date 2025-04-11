import User from "auth/forgotPassword/user";
import style from "auth/signIn/style";
import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { stop } from "standard/event";
import { hydrate } from "standard/interface";
import * as Navigate from "standard/navigate";
import { args } from "standard/router";
import component from "./component";

@define("m-email-verification")
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

  @willPaint
  async [hydrate]() {
    if (await User.isItAuthenticated()) Navigate.goToDashboard();
    return this;
  }
}

export default OAuth;
