import { define } from "directive";
import { didPaint, paint, repaint } from "standard/dom";
import on from "standard/event";
import appInstalled from "./appInstalled";
import beforeInstallPrompt from "./beforeInstalledPrompt";
import component from "./component";
import { setDisplay } from "./interfaces";

@define("memo-install")
@paint(component)
class Install extends HTMLElement {
  #event;

  get visible() {
    return !!this.#event;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host memo-button")
  click() {
    this.#event?.prompt();
    return this;
  }

  @appInstalled
  @repaint
  hide() {
    this.#event = undefined;
    return this;
  }

  @beforeInstallPrompt
  @repaint
  show(event) {
    this.#event = event;
    return this;
  }

  @didPaint
  [setDisplay]() {
    this.hidden
      ? this.style.setProperty("display", "none")
      : this.style.removeProperty("display");
    return this;
  }
}

export default Install;
