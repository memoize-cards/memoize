import { attributeChanged, define } from "directive";
import { on } from "standard/echo/interfaces";
import {
  echoConnectedCallback,
  echoDisconnectedCallback,
} from "standard/echo/lifeCycle";
import { setOn } from "./interfaces";

@define("m-echo-source")
class EchoSource extends HTMLElement {
  @attributeChanged(on)
  async [setOn](newValue, oldValue) {
    await customElements.whenDefined(this.parentElement.localName);
    this.parentElement?.[echoDisconnectedCallback]?.(oldValue);
    this.parentElement?.[echoConnectedCallback]?.(newValue);
    return this;
  }
}

export default EchoSource;
