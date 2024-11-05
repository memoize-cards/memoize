import { define } from "directive";
import { paint } from "standard/dom";
import on, { detail } from "standard/event";
import { urlFor } from "standard/router";
import component from "./component";
import style from "./style";

@define("memo-sign-in")
@paint(component, style)
class SignIn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("memo-form", detail)
  async login(data) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: user } = await supabase.auth.signInWithPassword(data);
    user && history.pushState({}, "", urlFor("dashboard"));
    return this;
  }
}

export default SignIn;
