class Card {
  #data;

  get back() {
    return this.#data.back;
  }

  get id() {
    return this.#data.id;
  }

  get front() {
    return this.#data.front;
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
      .from("card")
      .delete()
      .eq("id", this.#data.id)
      .eq("user_id", this.#data.user_id);
    this.#data = {};
    return this;
  }

  async update() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: card } = await supabase
      .from("card")
      .update(this.#data)
      .eq("id", this.#data.id)
      .eq("user_id", this.#data.user_id)
      .select()
      .single();
    this.#data = card;
    return this;
  }

  static async from(cardId, userId) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: card } = await supabase
      .from("card")
      .select("id, back, front, user_id")
      .eq("id", cardId)
      .eq("user_id", userId)
      .single();
    return new Card(card);
  }
}

export default Card;
