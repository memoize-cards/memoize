import { define } from "directive";
import { paint } from "standard/dom";
import { params } from "standard/router";
import component from "./component";
import style from "./style";

@define("memo-study-completed-by-deck")
@paint(component, style)
class App extends HTMLElement {
  get deck() {
    return params.deck;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default App;
