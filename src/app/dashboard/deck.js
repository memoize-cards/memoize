import Card from "./card";

class Deck {
  #cards;
  #data;

  get cards() {
    return (this.#cards ??= Card.from(this.#data.cards));
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

  static async from(userId) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: decks } = await supabase
      .from("deck")
      .select("id, name, cards:card(type)")
      .eq("user_id", userId);
    return decks?.map((deck) => new Deck(deck));
  }
}

export default Deck;
