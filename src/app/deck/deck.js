import Card from "./card";

class Deck {
  #cards;
  #data;

  get cards() {
    return (this.#cards ??= Card.from(this.#data.cards));
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

  static async from(deckId, userId) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .select("id, description, name, cards:card(type)")
      .eq("id", deckId)
      .eq("user_id", userId)
      .single();
    return new Deck(deck);
  }
}

export default Deck;
