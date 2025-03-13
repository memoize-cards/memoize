import Card from "./card";

class Deck {
  #cards;
  #data;

  get cards() {
    return (this.#cards ??= Card.from(this.#data.cards));
  }

  get cover() {
    return this.#data.cover;
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

  static async ofUserLogged() {
    const { decksOfUserLogged } = await import("artifact/supabase");
    const { data: decks } = await decksOfUserLogged();
    return decks?.map((deck) => new Deck(deck));
  }
}

export default Deck;
