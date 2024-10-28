import { define } from "directive";
import { paint } from "standard/dom";
import Echo from "standard/echo";
import component from "./component";
import memoize from "./memoize.svg";
import style from "./style";

@define("memo-logo")
@paint(component, style)
class Logo extends Echo(HTMLElement) {
  get alt() {
    return "Memoize";
  }

  get loading() {
    return "eager";
  }

  get src() {
    return memoize;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Logo;
