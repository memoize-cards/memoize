import User from "./user";

class Deck {
  #data;

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

  merge(data) {
    this.#data = { ...this.#data, ...data };
    return this;
  }

  async delete() {
    const { default: supabase } = await import("artifact/supabase");
    await supabase
      .from("deck")
      .delete()
      .eq("id", this.#data.id)
      .eq("user_id", this.#data.user_id);
    this.#data = {};
    return this;
  }

  async update() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .update(this.#data)
      .eq("id", this.#data.id)
      .eq("user_id", this.#data.user_id)
      .select()
      .single();
    this.#data = deck;
    return this;
  }

  static async from(deckId, userId) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .select("id, description, name, user_id")
      .eq("id", deckId)
      .eq("user_id", userId)
      .single();
    return new Deck(deck);
  }
}

export default Deck;
