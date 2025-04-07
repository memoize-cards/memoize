import { params } from "standard/router";

class Card {
  #data;

  get back() {
    return this.#data.back;
  }

  get cover() {
    return this.#data.cover;
  }

  get front() {
    return this.#data.front;
  }

  get id() {
    return this.#data.id;
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
    const { cardOfId, getUserLogged } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: card } = await cardOfId(params.card, user.id);
    return new Card(card);
  }
}

export default Card;
