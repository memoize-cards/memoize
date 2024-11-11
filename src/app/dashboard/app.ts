import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import component from "./component";
import Decks from "./decks";
import { hydrate } from "./interfaces";
import style from "./style";
import User from "./user";

@define("memo-dashboard")
@paint(component, style)
class App extends HTMLElement {
  #decks;
  #user;

  get avatar() {
    return this.#user.avatar;
  }

  get deck() {
    return (this.#decks ??= []);
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
    this.#decks = await Decks.from(this.#user);
    return this;
  }
}

export default App;
