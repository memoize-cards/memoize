import { define } from "directive";
import { paint } from "standard/dom";
import component from "./component";

@define("memo-dashboard-header")
@paint(component)
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Header;
