import { define } from "directive";
import { paint } from "standard/dom";
import Echo from "standard/echo";
import component from "./component";
import style from "./style";

@define("mc-header")
@paint(component, style)
class Header extends Echo(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Header;
