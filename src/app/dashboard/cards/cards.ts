import { define } from "directive";
import { paint } from "standard/dom";
import component from "./component";

@define("m-dashboard-cards")
@paint(component)
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Header;
