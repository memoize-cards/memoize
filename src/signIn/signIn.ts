import { define } from "directive";
import { paint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("memo-sign-in")
@paint(component, style)
class Site extends HTMLElement {}

export default Site;
