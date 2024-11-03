import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import component from "./component";
import style from "./style";

@define("memo-text")
@paint(component, style)
class Text extends Echo(HTMLElement) {
  #color;
  #family;
  #lineHeight;
  #size;
  #weight;

  get color() {
    return (this.#color ??= "master");
  }

  @attributeChanged("color")
  @dispatchEvent("color")
  @repaint
  set color(value) {
    this.#color = value;
  }

  get family() {
    return (this.#family ??= "base");
  }

  @attributeChanged("family")
  @dispatchEvent("family")
  @repaint
  set family(value) {
    this.#family = value;
  }

  get lineHeight() {
    return (this.#lineHeight ??= "lg");
  }

  @attributeChanged("line-height")
  @dispatchEvent("line-height")
  @repaint
  set lineHeight(value) {
    this.#lineHeight = value;
  }

  get size() {
    return (this.#size ??= "xxs");
  }

  @attributeChanged("size")
  @dispatchEvent("size")
  @repaint
  set size(value) {
    this.#size = value;
  }

  get weight() {
    return (this.#weight ??= "regular");
  }

  @attributeChanged("weight")
  @dispatchEvent("weight")
  @repaint
  set weight(value) {
    this.#weight = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Text;
