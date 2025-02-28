import { params } from "standard/router";

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

  async update(data) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: card } = await supabase
      .from("card")
      .update(data)
      .eq("id", this.id)
      .select()
      .single();
    this.#data = card;
    return this;
  }

  static async current() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: card } = await supabase
      .from("card")
      .select("id, back, front, user_id")
      .eq("id", params.card)
      .single();
    return new Card(card);
  }
}

export default Card;
