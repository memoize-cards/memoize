import Interval from "./interval";
import Type from "./type";
import Validity from "./validity";

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
      deck: deckId,
      interval: Interval.oneMinute,
      type: Type.LEARN,
      user_id: userId,
      validity: Validity.now,
    });
  }
}

export default Card;
