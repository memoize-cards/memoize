import { params } from "standard/router";

class Deck {
  #data;

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

  constructor(data) {
    this.#data = data;
  }

  async update(data) {
    const { updateDeckOfId } = await import("artifact/supabase");
    const { data: deck } = await updateDeckOfId(data, this.id);
    this.#data = deck;
    return this;
  }

  static async current() {
    const { deckOfId, getUserLogged } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: deck } = await deckOfId(params.deck, user.id);
    return new Deck(deck);
  }
}

export default Deck;
