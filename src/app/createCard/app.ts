import { define } from "directive";
import { paint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import Card from "./card";
import component from "./component";
import Navigate from "./navigate";
import style from "./style";
import User from "./user";

@define("m-create-card")
@paint(component, style)
class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("m-form", stop, detail)
  async create(data) {
    const user = await User.logged();
    await Card.create(data, user.id);
    Navigate.goToDeck();
    return this;
  }
}

export default App;
