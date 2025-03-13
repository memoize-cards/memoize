import { define } from "directive";
import style from "oauth/signIn/style";
import { paint, willPaint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import { hydrate } from "standard/interface";
import component from "./component";
import * as Navigate from "./navigate";
import User from "./user";

@define("m-set-new-password")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit(":host m-form", stop, detail)
  async reset(data) {
    const user = await User.updateUser(data);
    user && Navigate.goToPasswordReseted();
    return this;
  }

  @willPaint
  async [hydrate]() {
    if (await User.isItAuthenticated()) Navigate.goToDashboard();
    return this;
  }
}

export default OAuth;
