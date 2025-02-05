class Card {
  #data;

  get id() {
    return this.#data.id;
  }

  constructor(data) {
    this.#data = data;
  }

  async create() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: card } = await supabase
      .from("card")
      .insert([this.#data])
      .select()
      .single();
    this.#data = card;
    return this;
  }

  static from(data, deckId, userId) {
    return new Card({
      ...data,
      deck_id: deckId,
      user_id: userId,
    });
  }
}

export default Card;
