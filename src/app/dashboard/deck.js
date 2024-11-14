import Cards from "./cards";

class Deck {
  #cards;
  #data;

  get cards() {
    return (this.#cards ??= Cards.from(this.#data.cards));
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

  static async from(user) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: decks } = await supabase
      .from("deck")
      .select("id, name, cards:card(type)")
      .eq("user_id", user.id);
    return decks.map((deck) => new Deck(deck));
  }
}

export default Deck;
