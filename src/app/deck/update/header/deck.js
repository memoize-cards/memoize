import { params } from "standard/router";

class Deck {
  #data;

  get id() {
    return this.#data.id;
  }

  get paused() {
    return (this.#data.paused ??= false);
  }

  constructor(data) {
    this.#data = data;
  }

  async delete() {
    const { deleteDeckOfId } = await import("artifact/supabase");
    await deleteDeckOfId(this.id);
    this.#data = {};
    return this;
  }

  async pause() {
    const { pauseDeckOfId } = await import("artifact/supabase");
    const { data: deck } = await pauseDeckOfId(this.id);
    this.#data = deck;
    return this;
  }

  async play() {
    const { playDeckOfId } = await import("artifact/supabase");
    const { data: deck } = await playDeckOfId(this.id);
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
