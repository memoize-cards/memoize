import { define } from "directive";
import { paint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("memo-deck")
@paint(component, style)
class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

export default App;
