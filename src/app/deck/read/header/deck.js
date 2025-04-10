import { params } from "standard/router";

class Deck {
  #data;

  get paused() {
    return (this.#data.paused ??= false);
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
