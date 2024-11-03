import { attributeChanged, connected } from "@bake-js/-o-id";
import booleanAttribute from "../booleanAttribute";
import dispatchEvent from "../dispatchEvent";
import joinCut from "../joinCut";
import { removed, resetState, setState, syncAttribute } from "./interfaces";

class Validator extends HTMLElement {
  #disabled;
  #message;
  #value;

  get disabled() {
    return (this.#disabled ??= false);
  }

  @attributeChanged("disabled", booleanAttribute)
  @dispatchEvent("redisabed")
  @joinCut(syncAttribute)
  set disabled(value) {
    this.#disabled = value;
  }

  get message() {
    return (this.#message ??= "");
  }

  @attributeChanged("message")
  @dispatchEvent("messaged")
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
  @dispatchEvent("changed")
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
