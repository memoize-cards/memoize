import { define } from "directive";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { stop } from "standard/event";
import { args, urlFor } from "standard/router";
import component from "./component";

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
    window.open(`https://${url}`, "_blank");
    return this;
  }

  @on.click(":host #resend", stop)
  resend() {
    const redirectTo = `https://memoize.cards${urlFor("setNewPassword")}`;
    supabase.auth.resetPasswordForEmail(args.email, { redirectTo });
    return this;
  }
}

export default OAuth;
