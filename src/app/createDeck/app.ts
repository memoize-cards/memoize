import { define } from "directive";
import { paint } from "standard/dom";
import on, { detail, prevent } from "standard/event";
import component from "./component";
import style from "./style";

@define("memo-create-deck")
@paint(component, style)
class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("memo-form", prevent, detail)
  create(data) {
    console.log(data);
    return this;
  }
}

export default App;
