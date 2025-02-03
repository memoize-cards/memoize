import { define } from "directive";
import style from "oauth/signIn/style";
import { paint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import component from "./component";
import Navigate from "./navigate";
import User from "./user";

@define("memo-set-new-password")
@paint(component, style)
class OAuth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit(":host memo-form", stop, detail)
  async reset(data) {
    const user = await User.updateUser(data);
    user && Navigate.goToPasswordReseted();
    return this;
  }
}

export default OAuth;
