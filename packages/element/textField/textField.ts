import { define, disconnected, formAssociated, formReset } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { didPaint, paint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import on, { prevent, value } from "standard/event";
import joinCut from "standard/joinCut";
import component from "./component";
import Input from "./input";
import { change, remove, setFormValue, setValidity } from "./interfaces";
import Label from "./label";
import style from "./style";

@define("memo-text-field")
@paint(component, style)
class TextField extends Echo(HTMLElement) {
  #controller;
  #input;
  #internals;
  #label;

  get form() {
    return this.#internals.form;
  }

  get inputMode() {
    return this.#input.inputMode;
  }

  @attributeChanged("inputmode")
  @dispatchEvent("inputMode")
  set inputMode(value) {
    this.#input.inputMode = value;
  }

  get label() {
    return this.#label.innerText;
  }

  @attributeChanged("label")
  @dispatchEvent("label")
  set label(value) {
    this.#label.innerText = value;
  }

  get name() {
    return (this.#input.name ??= "");
  }

  @attributeChanged("name")
  @dispatchEvent("name")
  set name(value) {
    this.#input.name = value;
  }

  get placeholder() {
    return this.#input.placeholder;
  }

  @attributeChanged("placeholder")
  @dispatchEvent("placeholder")
  set placeholder(value) {
    this.#input.placeholder = value;
  }

  get required() {
    return this.#input.required;
  }

  @attributeChanged("required", booleanAttribute)
  @dispatchEvent("required")
  @joinCut(setValidity)
  set required(value) {
    this.#input.required = value;
  }

  get type() {
    return this.#input.type;
  }

  @attributeChanged("type")
  @dispatchEvent("type")
  @joinCut(setValidity)
  set type(value) {
    this.#input.type = value;
  }

  get validationMessage() {
    return this.#internals.validationMessage;
  }

  get validity() {
    return this.#internals.validity;
  }

  get value() {
    return this.#input.value;
  }

  @attributeChanged("value")
  @dispatchEvent("value")
  @joinCut(setValidity)
  set value(value) {
    this.#input.value = value;
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
    this.#input = Input.from(this);
    this.#label = Label.from(this);
  }

  @on.input("input", value)
  @dispatchEvent("change")
  @joinCut(setValidity)
  [change](val) {
    this.#input.value = val;
    return this.value;
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
  @joinCut(setValidity)
  reset() {
    this.#input.value = "";
    this.#internals.states.delete("invalid");
    return this.value;
  }

  @formAssociated
  [setFormValue](form) {
    const event = "formdata";
    const listener = (event) =>
      this.disabled || event.formData.set(this.name, this.value);
    const options = { signal: this.#controller.signal };
    form.addEventListener(event, listener, options);
    return this;
  }

  @didPaint
  [setValidity]() {
    const { validationMessage, validity } =
      this.shadowRoot.querySelector("input") ?? {};
    this.#internals.setValidity(validity, validationMessage);
    return this;
  }
}

export default TextField;
