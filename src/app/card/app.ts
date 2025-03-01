import { define } from "directive";
import { paint, repaint, willPaint } from "standard/dom";
import on, { stop } from "standard/event";
import { params } from "standard/router";
import Card from "./card";
import component from "./component";
import { hydrate } from "./interfaces";
import Navigate from "./navigate";
import style from "./style";
import User from "./user";

@define("m-card")
@paint(component, style)
class App extends HTMLElement {
  #user;
  #card;

  get card() {
    return (this.#card ??= {});
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.again("m-card-answer", stop)
  @repaint
  async again() {
    await this.#card.again();
    return this;
  }

  @on.easy("m-card-answer", stop)
  @repaint
  async easy() {
    await this.#card.easy();
    return this;
  }

  @on.good("m-card-answer", stop)
  @repaint
  async good() {
    await this.#card.good();
    return this;
  }

  @on.hard("m-card-answer", stop)
  @repaint
  async hard() {
    await this.#card.hard();
    return this;
  }

  @willPaint
  async [hydrate]() {
    this.#user = await User.logged();
    this.#card = await Card.from(params.deck, this.#user.id);

    if (!this.#card.id) {
      params.deck
        ? Navigate.goToStudyCompletedOfDeck(params.deck)
        : Navigate.goToStudyCompleted();
    }

    return this;
  }
}

export default App;
