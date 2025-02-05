class Deck {
  #data;

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
      .select("id, name")
      .eq("id", deckId)
      .eq("user_id", userId)
      .single();
    return new Deck(deck);
  }
}

export default Deck;
