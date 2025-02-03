import { attributeChanged, define } from "directive";
import Echo, { dispatchEvent } from "standard/echo";

@define("memo-redirect")
class Redirect extends Echo(HTMLElement) {
  #href;

  get href() {
    return (this.#href ??= "#");
  }

  @attributeChanged("href")
  @dispatchEvent("href")
  set href(value) {
    this.#href = value;
  }

  constructor() {
    super();
    this.style.setProperty("display", "none");
  }

  go() {
    history.pushState({}, "", this.href);
    return this;
  }
}
