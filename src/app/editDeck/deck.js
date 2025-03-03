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
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .update(data)
      .eq("id", this.id)
      .select()
      .single();
    this.#data = deck;
    return this;
  }

  static async current() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .select("id, cover, description, name, user_id")
      .eq("id", params.deck)
      .single();
    return new Deck(deck);
  }
}

export default Deck;
