import { define } from "directive";
import { paint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import component from "./component";
import Deck from "./deck";
import Navigate from "./navigate";
import style from "./style";
import User from "./user";

@define("m-create-deck")
@paint(component, style)
class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("m-form", stop, detail)
  async create(data) {
    const user = await User.logged();
    const deck = Deck.from(data, user.id);
    await deck.create();
    Navigate.goToDeck(deck.id);
    return this;
  }
}

export default App;
