import { attributeChanged, define } from "directive";
import { paint } from "standard/dom";
import { prevent } from "standard/event";
import relay from "standard/relay";
import component from "./component";
import { setState } from "./interfaces";
import style from "./style";

@define("memo-validity")
@paint(component, style)
class Validity extends HTMLElement {
  #internals;
  #state;

  get state() {
    return this.#state;
  }

  @attributeChanged("state")
  set state(value) {
    this.#state = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  @relay.change()
  @relay.invalid(prevent)
  [setState]() {
    this.parentElement.validity[this.state]
      ? this.#internals.states.add("invalid")
      : this.#internals.states.delete("invalid");
    return this;
  }
}

export default Validity;
