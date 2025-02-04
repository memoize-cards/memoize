class Deck {
  #data;

  get id() {
    return this.#data.id;
  }

  constructor(data) {
    this.#data = data;
  }

  async create() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .insert([this.#data])
      .select()
      .single();
    this.#data = deck;
    return this;
  }

  static from(data, userId) {
    return new Deck({
      ...data,
      user_id: userId,
    });
  }
}

export default Deck;
