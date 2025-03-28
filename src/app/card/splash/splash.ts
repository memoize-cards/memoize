import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import on, { stop } from "standard/event";
import component from "./component";
import { setDisplay } from "./interfaces";
import style from "./style";

@define("m-card-splash")
@paint(component, style)
class Splash extends Echo(HTMLElement) {
  #slim;

  get slim() {
    return (this.#slim ??= false);
  }

  @attributeChanged("slim", booleanAttribute)
  @repaint
  set slim(value) {
    this.#slim = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("m-button", stop)
  @dispatchEvent("hide")
  [setDisplay]() {
    this.style.setProperty("display", "none");
    return this;
  }
}

export default Splash;
