import { define, disconnected, formAssociated, formReset } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { didPaint, paint, repaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import on, { value } from "standard/event";
import joinCut from "standard/joinCut";
import component from "./component";
import { change, remove, setFormValue, setValidity } from "./interfaces";
import style from "./style";

@define("m-input")
@paint(component, style)
class Input extends Echo(HTMLElement) {
  #autocomplete;
  #controller;
  #inputMode;
  #internals;
  #label;
  #maxlength;
  #name;
  #placeholder;
  #required;
  #type;
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

  get inputMode() {
    return this.#inputMode ?? this.type;
  }

  @attributeChanged("inputmode")
  @repaint
  set inputMode(value) {
    this.#inputMode = value;
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

  get type() {
    return (this.#type ??= "text");
  }

  @attributeChanged("type")
  @repaint
  set type(value) {
    this.#type = value;
  }

  get validationMessage() {
    return this.#internals.validationMessage;
  }

  get validity() {
    return this.#internals.validity;
  }

  get value() {
    return (this.#value ??= "");
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
      this.shadowRoot.querySelector("input") ?? {};
    this.#internals.setValidity(validity, validationMessage);
    return validity;
  }
}

export default Input;
