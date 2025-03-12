import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import { hydrate } from "standard/interface";
import * as Navigate from "standard/navigate";
import component from "./component";
import style from "./style";
import User from "./user";

@define("m-site")
@paint(component, style)
class Site extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    if (await User.isItAuthenticated()) Navigate.goToDashboard();
    return this;
  }
}

export default Site;
