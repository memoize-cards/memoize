import Validity from "./validity";

class Card {
  #data;

  get validity() {
    return this.#data[0]?.validity;
  }

  get total() {
    return this.#data.length;
  }

  constructor(data) {
    this.#data = data;
  }

  static async from(userId) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: cards } = await supabase
      .from("card")
      .select("validity")
      .eq("user_id", userId)
      .lte("validity", Validity.expired)
      .order("validity", { ascending: true });
    return new Card(cards);
  }
}

export default Card;
