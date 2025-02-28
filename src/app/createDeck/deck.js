class Deck {
  #data;

  get id() {
    return this.#data.id;
  }

  constructor(data) {
    this.#data = data;
  }

  static async create(data, userId) {
    const payload = {
      ...data,
      user_id: userId,
    };
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .insert([payload])
      .select()
      .single();
    return new Deck(deck);
  }
}

export default Deck;
