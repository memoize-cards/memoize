import {
  connected,
  define,
  disconnected,
  formAssociated,
  formReset,
} from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { didPaint, paint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
import on, { prevent, value } from "standard/event";
import joinCut from "standard/joinCut";
import component from "./component";
import Input from "./input";
import {
  changed,
  invalidated,
  removed,
  setDisplay,
  setFormValue,
  setState,
  setValidity,
} from "./interfaces";
import Label from "./label";
import style from "./style";

@define("memo-text-field")
@paint(component, style)
class TextField extends Echo(HTMLElement) {
  #controller;
  #hidden;
  #input;
  #internals;
  #label;

  get disabled() {
    return this.#input.disabled;
  }

  @attributeChanged("disabled", booleanAttribute)
  @dispatchEvent("disabledChanged")
  set disabled(value) {
    this.#input.disabled = value;
  }

  get form() {
    return this.#internals.form;
  }

  get hidden() {
    return (this.#hidden ??= false);
  }

  @attributeChanged("hidden", booleanAttribute)
  @dispatchEvent("hiddenChanged")
  @joinCut(setDisplay)
  set hidden(value) {
    this.#hidden = value;
  }

  get id() {
    return this.#input.id;
  }

  @attributeChanged("id")
  @dispatchEvent("idChanged")
  set id(value) {
    this.#label.for = value;
    this.#input.id = value;
  }

  get inputMode() {
    return this.#input.inputMode;
  }

  @attributeChanged("inputmode")
  @dispatchEvent("inputModeChanged")
  set inputMode(value) {
    this.#input.inputMode = value;
  }

  get label() {
    return this.#label.innerText;
  }

  @attributeChanged("label")
  @dispatchEvent("labelChanged")
  set label(value) {
    this.#label.innerText = value;
  }

  get max() {
    return (this.#input.max ??= "");
  }

  @attributeChanged("max")
  @dispatchEvent("maxChanged")
  @joinCut(setState)
  @joinCut(setValidity)
  set max(value) {
    this.#input.max = value;
  }

  get maxLength() {
    return (this.#input.maxlength ??= "");
  }

  @attributeChanged("maxlength")
  @dispatchEvent("maxLengthChanged")
  @joinCut(setState)
  @joinCut(setValidity)
  set maxLength(value) {
    this.#input.maxlength = value;
  }

  get min() {
    return (this.#input.min ??= "");
  }

  @attributeChanged("min")
  @dispatchEvent("minChanged")
  @joinCut(setState)
  @joinCut(setValidity)
  set min(value) {
    this.#input.min = value;
  }

  get minLength() {
    return (this.#input.minlength ??= "");
  }

  @attributeChanged("minlength")
  @dispatchEvent("minLengthChanged")
  @joinCut(setState)
  @joinCut(setValidity)
  set minLength(value) {
    this.#input.minlength = value;
  }

  get name() {
    return (this.#input.name ??= "");
  }

  @attributeChanged("name")
  @dispatchEvent("nameChanged")
  set name(value) {
    this.#input.name = value;
  }

  get pattern() {
    return this.#input.pattern;
  }

  @attributeChanged("pattern", booleanAttribute)
  @dispatchEvent("patternChanged")
  @joinCut(setState)
  @joinCut(setValidity)
  set pattern(value) {
    this.#input.pattern = value;
  }

  get placeholder() {
    return this.#input.placeholder;
  }

  @attributeChanged("placeholder")
  @dispatchEvent("placeholderChanged")
  set placeholder(value) {
    this.#input.placeholder = value;
  }

  get readonly() {
    return this.#input.readonly;
  }

  @attributeChanged("readonly", booleanAttribute)
  @dispatchEvent("readonlyChanged")
  set readonly(value) {
    this.#input.readonly = value;
  }

  get required() {
    return this.#input.required;
  }

  @attributeChanged("required", booleanAttribute)
  @dispatchEvent("requiredChanged")
  @joinCut(setState)
  @joinCut(setValidity)
  set required(value) {
    this.#input.required = value;
  }

  get step() {
    return this.#input.step;
  }

  @attributeChanged("step")
  @dispatchEvent("stepChanged")
  @joinCut(setState)
  @joinCut(setValidity)
  set step(value) {
    this.#input.step = value;
  }

  get type() {
    return this.#input.type;
  }

  @attributeChanged("type")
  @dispatchEvent("typeChanged")
  @joinCut(setState)
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
  @dispatchEvent("valueChanged")
  @joinCut(setState)
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
  @dispatchEvent("changed")
  @joinCut(setState)
  @joinCut(setValidity)
  [changed](val) {
    this.#input.value = val;
    return this.value;
  }

  checkValidity() {
    return this.#internals.checkValidity();
  }

  @on.invalid("*", prevent)
  [invalidated]() {
    this.dispatchEvent(new CustomEvent("invalidated"));
    return this;
  }

  @disconnected
  [removed]() {
    this.#controller.abort();
    return this;
  }

  reportValidity() {
    return this.#internals.reportValidity();
  }

  @formReset
  @dispatchEvent("reseted")
  @joinCut(setValidity)
  reset() {
    this.#input.value = "";
    this.#internals.states.delete("invalid");
    return this.value;
  }

  [setDisplay]() {
    this.hidden
      ? this.style.setProperty("display", "none")
      : this.style.removeProperty("display");
    return this;
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

  @on.invalid("*", prevent)
  [setState]() {
    this.validity.valid
      ? this.#internals.states.delete("invalid")
      : this.#internals.states.add("invalid");
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
