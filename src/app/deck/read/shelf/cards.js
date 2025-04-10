import { params } from "standard/router";

class Cards {
  #data;

  get front() {
    return (this.#data.front ??= "");
  }

  get id() {
    return this.#data.id;
  }

  constructor(data) {
    this.#data = data;
  }

  static async current() {
    const { cardsOfDeck, getUserLogged } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: cards } = await cardsOfDeck(params.deck, user.id);
    return cards?.map((card) => new Cards(card));
  }
}

export default Cards;
