import { define } from "directive";
import { paint } from "standard/dom";
import on, { stop } from "standard/event";
import { params } from "standard/router";
import component from "./component";
import Navigate from "./navigate";
import style from "./style";

@define("memo-study-completed")
@paint(component, style)
class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click(":host memo-button", stop)
  click() {
    params.deck ? Navigate.goToDeck(params.deck) : Navigate.goToDashboard();
    return this;
  }
}

export default App;
