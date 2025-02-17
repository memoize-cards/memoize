import Card from "./card";
import Progress from "./progress";

class Deck {
  #cards;
  #data;
  #progress;

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

  get progress() {
    return (this.#progress ??= Progress.from(this.#data.cards));
  }

  constructor(data) {
    this.#data = data;
  }

  static async from(deckId, userId) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .select("id, description, name, cards:card(id, front, type)")
      .eq("id", deckId)
      .eq("user_id", userId)
      .single();
    return new Deck(deck);
  }
}

export default Deck;
