import { define } from "directive";
import { paint } from "standard/dom";
import on from "standard/event";
import component from "./component";
import Navigate from "./navigate";
import User from "./user";

@define("memo-card-header")
@paint(component)
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host #goBack")
  goBack() {
    User.isFromGlobalStudy ? Navigate.goToDashboard() : Navigate.goToDeck();
    return this;
  }
}

export default Header;
