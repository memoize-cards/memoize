import { define, disconnected, formAssociated, formReset } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { didPaint, paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import on, { prevent, value } from "standard/event";
import joinCut from "standard/joinCut";
import component from "./component";
import {
  change,
  remove,
  resize,
  setFormValue,
  setValidity,
} from "./interfaces";
import style from "./style";

@define("memo-area")
@paint(component, style)
class Area extends Echo(HTMLElement) {
  #autocomplete;
  #controller;
  #internals;
  #label;
  #maxlength;
  #name;
  #placeholder;
  #required;
  #value;

  get autocomplete() {
    return (this.#autocomplete ??= "");
  }

  @attributeChanged("autocomplete")
  @repaint
  set autocomplete(value) {
    this.#autocomplete = value;
  }

  get form() {
    return this.#internals.form;
  }

  get label() {
    return (this.#label ??= "");
  }

  @attributeChanged("label")
  @repaint
  set label(value) {
    this.#label = value;
  }

  get maxlength() {
    return this.#maxlength;
  }

  @attributeChanged("maxlength")
  @repaint
  set maxlength(value) {
    this.#maxlength = value;
  }

  get name() {
    return (this.#name ??= "");
  }

  @attributeChanged("name")
  @repaint
  set name(value) {
    this.#name = value;
  }

  get placeholder() {
    return this.#placeholder;
  }

  @attributeChanged("placeholder")
  @repaint
  set placeholder(value) {
    this.#placeholder = value;
  }

  get required() {
    return (this.#required ??= false);
  }

  @attributeChanged("required", booleanAttribute)
  @repaint
  set required(value) {
    this.#required = value;
  }

  get validationMessage() {
    return this.#internals.validationMessage;
  }

  get validity() {
    return this.#internals.validity;
  }

  get value() {
    return (this.#value ??= this.querySelector("template")?.innerHTML ?? "");
  }

  @attributeChanged("value")
  @repaint
  set value(value) {
    this.#value = value;
  }

  get willValidate() {
    return this.#internals.willValidate;
  }

  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open", delegatesFocus: true });
    this.#controller = new AbortController();
    this.#internals = this.attachInternals();
  }

  @on.input("*", value)
  @dispatchEvent("change")
  @joinCut(setValidity)
  [change](val) {
    return (this.#value = val), val;
  }

  @on.input("*")
  [resize](event) {
    event.target.style.setProperty("height", "auto");
    event.target.style.setProperty("height", `${event.target.scrollHeight}px`);
    return this;
  }

  checkValidity() {
    return this.#internals.checkValidity();
  }

  @disconnected
  [remove]() {
    this.#controller.abort();
    return this;
  }

  reportValidity() {
    return this.#internals.reportValidity();
  }

  @formReset
  @dispatchEvent("reset")
  @repaint
  reset() {
    this.#value = "";
    this.#internals.states.delete("invalid");
    return this.value;
  }

  @formAssociated
  [setFormValue](form) {
    const event = "formdata";
    const listener = (event) => event.formData.set(this.name, this.value);
    const options = { signal: this.#controller.signal };
    form.addEventListener(event, listener, options);
    return this;
  }

  @didPaint
  [setValidity]() {
    const { validationMessage, validity } =
      this.shadowRoot.querySelector("textarea") ?? {};
    this.#internals.setValidity(validity, validationMessage);
    return validity;
  }
}

export default Area;
