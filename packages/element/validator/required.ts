import { connected, define, disconnected } from "directive";
import { paint } from "standard/dom";
import Echo from "standard/echo";
import { prevent } from "standard/event";
import relay from "standard/relay";
import component from "./component";
import { removed, resetState, setState, syncAttribute } from "./interfaces";
import style from "./style";
import Validator from "./validator";

@define("memo-required-validator")
@paint(component, style)
class Required extends Echo(Validator) {
  #internals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  @disconnected
  [removed]() {
    this.parentElement.removeAttribute("required");
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
        ? this.parentElement.removeAttribute("required")
        : this.parentElement.setAttribute("required", true);
    }
    return this;
  }

  @relay.change()
  @relay.invalid(prevent)
  @relay.require()
  [setState]() {
    this.parentElement.validity.valueMissing
      ? this.#internals.states.add("invalid")
      : this.#internals.states.delete("invalid");
    return this;
  }
}

export default Required;
