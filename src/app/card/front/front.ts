import { attributeChanged, define } from "directive";
import { paint, repaint } from "standard/dom";
import component from "./component";
import Type from "./type";

@define("m-card-front")
@paint(component)
class Front extends HTMLElement {
  #deck;
  #type;

  get deck() {
    return (this.#deck ??= "");
  }

  @attributeChanged("deck")
  @repaint
  set deck(value) {
    this.#deck = value;
  }

  get type() {
    return Type.from((this.#type ??= 0));
  }

  @attributeChanged("type")
  @repaint
  set type(value) {
    this.#type = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default Front;
