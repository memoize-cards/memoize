import { connected, define, disconnected } from "directive";
import { paint } from "standard/dom";
import Echo from "standard/echo";
import { prevent } from "standard/event";
import relay from "standard/relay";
import component from "./component";
import { removed, resetState, setState, syncAttribute } from "./interfaces";
import style from "./style";
import Validator from "./validator";

@define("memo-type-validator")
@paint(component, style)
class Type extends Echo(Validator) {
  #internals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  @disconnected
  [removed]() {
    this.parentElement.removeAttribute("type");
    return this;
  }

  @relay.reset()
  [resetState]() {
    this.#internals.states.delete("invalid");
    return this;
  }

  @connected
  [syncAttribute]() {
    if (this.isConnected) {
      this.disabled
        ? this.parentElement.removeAttribute("type")
        : this.parentElement.setAttribute("type", this.value);
    }
    return this;
  }

  @relay.change()
  @relay.invalid(prevent)
  @relay.type()
  [setState]() {
    this.parentElement.validity.typeMismatch
      ? this.#internals.states.add("invalid")
      : this.#internals.states.delete("invalid");
    return this;
  }
}

export default Type;
