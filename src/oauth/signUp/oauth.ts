import { define } from "directive";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import { urlFor } from "standard/router";
import component from "./component";

@define("memo-sign-up")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit(":host memo-form", stop, detail)
  async create(data) {
    const { email, password, name } = data;
    const { default: supabase } = await import("artifact/supabase");
    const { data: user } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    user && history.pushState({}, "", urlFor("dashboard"));
    return this;
  }
}

export default OAuth;
