import { define } from "directive";
import { paint } from "standard/dom";
import on, { detail, prevent, stop } from "standard/event";
import { urlFor } from "standard/router";
import component from "./component";
import style from "./style";

@define("memo-sign-in")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("memo-form", prevent, detail)
  async logIn(data) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: user } = await supabase.auth.signInWithPassword(data);
    user && history.pushState({}, "", urlFor("dashboard"));
    return this;
  }

  @on.click("#logInWithGoogle", stop)
  async logInWithGoogle() {
    const { default: supabase } = await import("artifact/supabase");
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: urlFor("dashboard") },
    });
    return this;
  }
}

export default OAuth;
