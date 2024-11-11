import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import component from "./component";
import { hydrate } from "./interfaces";
import style from "./style";
import User from "./user";

@define("memo-dashboard")
@paint(component, style)
class App extends HTMLElement {
  #user;

  get avatar() {
    return this.#user.avatar;
  }

  get name() {
    return this.#user.name;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#user = await User.logged();
    return this;
  }
}

export default App;
