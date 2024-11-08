import { define } from "directive";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import { urlFor } from "standard/router";
import component from "./component";

@define("memo-forgot-password")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit(":host memo-form", stop, detail)
  async reset(data) {
    const { email } = data;
    const { default: supabase } = await import("artifact/supabase");
    const { data: user } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `https://memoize.cards${urlFor("setNewPassword")}`,
    });
    user &&
      history.pushState(
        {},
        "",
        `${urlFor("emailVerification")}?email=${email}`,
      );
    return this;
  }
}

export default OAuth;
