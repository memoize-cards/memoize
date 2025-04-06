import { params } from "standard/router";
import Progress from "./progress";

class Deck {
  #cards;
  #data;
  #progress;

  get cover() {
    return this.#data.cover;
  }

  get description() {
    return this.#data.description;
  }

  get id() {
    return this.#data.id;
  }

  get name() {
    return this.#data.name;
  }

  get progress() {
    return (this.#progress ??= Progress.from(this.#data.cards));
  }

  constructor(data) {
    this.#data = data;
  }

  static async current() {
    const { deckOfId, getUserLogged } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: deck } = await deckOfId(params.deck, user.id);
    return new Deck(deck);
  }
}

export default Deck;
