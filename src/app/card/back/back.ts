import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import Echo from "standard/echo";
import on, { stop } from "standard/event";
import component from "./component";
import style from "./style";

@define("m-card-back")
@paint(component, style)
class Back extends Echo(HTMLElement) {
  #hidden;

  get hidden() {
    return (this.#hidden ??= false);
  }

  @attributeChanged("hidden", booleanAttribute)
  @repaint
  set hidden(value) {
    this.#hidden = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("#speech", stop)
  speech() {
    const text = this.querySelector("m-markdown").shadowRoot.textContent;
    const untterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(untterance);
    return this;
  }
}

export default Back;
