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

@define("memo-card")
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

  @on.click("#again", stop)
  @repaint
  async again() {
    await this.#card.again();
    return this;
  }

  @on.click("#easy", stop)
  @repaint
  async easy() {
    await this.#card.easy();
    return this;
  }

  @on.click(":host #goBack")
  goBack() {
    params.deck ? Navigate.goToDeck(params.deck) : Navigate.goToDashboard();
    return this;
  }

  @on.click("#good", stop)
  @repaint
  async good() {
    await this.#card.good();
    return this;
  }

  @on.click("#hard", stop)
  @repaint
  async hard() {
    await this.#card.hard();
    return this;
  }

  @on.click("#speech", stop)
  speech() {
    const text =
      this.shadowRoot.querySelector("memo-markdown").shadowRoot.textContent;
    const untterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(untterance);
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
