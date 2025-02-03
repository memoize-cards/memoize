import { define } from "directive";
import { paint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import { urlFor } from "standard/router";
import component from "./component";
import Deck from "./deck";
import Navigate from "./navigate";
import style from "./style";

@define("memo-create-deck")
@paint(component, style)
class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("memo-form", stop, detail)
  async create(data) {
    const deck = Deck.from(data);
    await deck.create();
    Navigate.goToDeck(deck);
    return this;
  }
}

export default App;
