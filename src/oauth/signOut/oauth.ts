import { define } from "directive";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { stop } from "standard/event";
import { urlFor } from "standard/router";
import component from "./component";

@define("memo-sign-out")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("#logOut", stop)
  async logOut(data) {
    const { default: supabase } = await import("artifact/supabase");
    await supabase.auth.signOut();
    history.pushState({}, "", urlFor("site"));
    return this;
  }
}

export default OAuth;
