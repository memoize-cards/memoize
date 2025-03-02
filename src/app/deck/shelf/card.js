import { params } from "standard/router";

class Card {
  #data;

  get front() {
    return (this.#data.front ??= "");
  }

  get id() {
    return this.#data.id;
  }

  constructor(data) {
    this.#data = data;
  }

  static async current() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: cards } = await supabase
      .from("card")
      .select("id, front)")
      .eq("deck", params.deck);
    return cards?.map((card) => new Card(card));
  }
}

export default Card;
