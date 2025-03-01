import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import Echo from "standard/echo";
import on, { stop } from "standard/event";
import component from "./component";
import init from "./init";
import style from "./style";

@define("m-card-answer")
@paint(component, style)
class Answer extends Echo(HTMLElement) {
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

  @on.click("#again", stop)
  async again() {
    const event = new CustomEvent("again", init);
    this.dispatchEvent(event);
    return this;
  }

  @on.click("#easy", stop)
  async easy() {
    const event = new CustomEvent("easy", init);
    this.dispatchEvent(event);
    return this;
  }

  @on.click("#good", stop)
  async good() {
    const event = new CustomEvent("good", init);
    this.dispatchEvent(event);
    return this;
  }

  @on.click("#hard", stop)
  async hard() {
    const event = new CustomEvent("hard", init);
    this.dispatchEvent(event);
    return this;
  }
}

export default Answer;
