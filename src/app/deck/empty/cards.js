import { params } from "standard/router";

class Cards {
  #count;

  get count() {
    return (this.#count ??= 0);
  }

  constructor(count) {
    this.#count = count;
  }

  static async current() {
    const { countCardsOfDeck } = await import("artifact/supabase");
    const { data: count } = await countCardsOfDeck(params.deck);
    return new Cards(count);
  }
}

export default Cards;
