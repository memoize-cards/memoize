import { define } from "directive";
import attributeChanged from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("m-text")
@paint(component, style)
class Text extends HTMLElement {
  #align;
  #color;
  #family;
  #lineHeight;
  #size;
  #weight;

  get align() {
    return (this.#align ??= "left");
  }

  @attributeChanged("align")
  @repaint
  set align(value) {
    this.#align = value;
  }

  get color() {
    return (this.#color ??= "master-dark");
  }

  @attributeChanged("color")
  @repaint
  set color(value) {
    this.#color = value;
  }

  get family() {
    return (this.#family ??= "base");
  }

  @attributeChanged("family")
  @repaint
  set family(value) {
    this.#family = value;
  }

  get lineHeight() {
    return (this.#lineHeight ??= "lg");
  }

  @attributeChanged("line-height")
  @repaint
  set lineHeight(value) {
    this.#lineHeight = value;
  }

  get size() {
    return (this.#size ??= "xxs");
  }

  @attributeChanged("size")
  @repaint
  set size(value) {
    this.#size = value;
  }

  get weight() {
    return (this.#weight ??= "regular");
  }

  @attributeChanged("weight")
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
