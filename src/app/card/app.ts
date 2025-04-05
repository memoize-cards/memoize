import { define } from "directive";
import { didPaint, paint, repaint, willPaint } from "standard/dom";
import on, { stop } from "standard/event";
import { hydrate, prepare, validate } from "standard/interface";
import { params } from "standard/router";
import Card from "./card";
import component from "./component";
import Habit from "./habit";
import Navigate from "./navigate";
import style from "./style";
import User from "./user";

@define("m-card")
@paint(component, style)
class App extends HTMLElement {
  #user;
  #habit;
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
    await this.#habit.endReview();
    await this.#user.endReview();
    return this;
  }

  @on.easy("m-card-answer", stop)
  @repaint
  async easy() {
    await this.#card.easy();
    await this.#habit.endReview();
    await this.#user.endReview();
    return this;
  }

  @on.good("m-card-answer", stop)
  @repaint
  async good() {
    await this.#card.good();
    await this.#habit.endReview();
    await this.#user.endReview();
    return this;
  }

  @on.hard("m-card-answer", stop)
  @repaint
  async hard() {
    await this.#card.hard();
    await this.#habit.endReview();
    await this.#user.endReview();
    return this;
  }

  @willPaint
  async [hydrate]() {
    this.#card = await Card.current();
    this.#habit = await Habit.ofToday();
    this.#user = await User.logged();
    return this;
  }

  @didPaint
  [prepare]() {
    this.#habit.beginReview();
    this.#user.beginReview();
    return this;
  }

  @didPaint
  [validate]() {
    if (!this.#card.id) {
      params.deck
        ? Navigate.goToStudyCompletedOfDeck(params.deck)
        : Navigate.goToStudyCompleted();
    }
    return this;
  }
}

export default App;
