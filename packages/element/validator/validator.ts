import { connected } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { dispatchEvent } from "standard/echo";
import joinCut from "standard/joinCut";
import { removed, resetState, setState, syncAttribute } from "./interfaces";

class Validator extends HTMLElement {
  #disabled;
  #message;
  #value;

  get message() {
    return (this.#message ??= "");
  }

  @attributeChanged("message")
  @dispatchEvent("message")
  set message(value) {
    this.#message = value;

    if (this.isPainted) {
      this.shadowRoot.querySelector("span").innerHTML = value;
    }
  }

  get value() {
    return this.#value;
  }

  @attributeChanged("value")
  @dispatchEvent("value")
  @joinCut(syncAttribute)
  set value(value) {
    this.#value = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  [removed]() {
    return this;
  }

  [resetState]() {
    return this;
  }

  [syncAttribute]() {
    return this;
  }

  [setState]() {
    return this;
  }
}

export default Validator;
