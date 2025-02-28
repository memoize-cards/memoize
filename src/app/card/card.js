import Calc from "./calc";
import Deck from "./deck";
import Type from "./type";
import Validity from "./validity";

class Card {
  #calc;
  #data;
  #deck;

  get back() {
    return (async () => {
      const { default: showdown } = await import("artifact/showdown");
      return showdown.makeHtml(this.#data?.back);
    })();
  }

  get deck() {
    return (this.#deck ??= Deck.from(this.#data?.deck));
  }

  get front() {
    return this.#data?.front;
  }

  get id() {
    return this.#data?.id;
  }

  get type() {
    return Type.from(this.#data?.type);
  }

  constructor(data) {
    this.#data = data;
    this.#calc = Calc.from(this.#data);
  }

  async again() {
    this.#calc.again();
    await this.#update();
    return this;
  }

  async easy() {
    this.#calc.easy();
    await this.#update();
    return this;
  }

  async good() {
    this.#calc.good();
    await this.#update();
    return this;
  }

  async hard() {
    this.#calc.hard();
    await this.#update();
    return this;
  }

  async #update() {
    const { default: supabase } = await import("artifact/supabase");
    await supabase
      .from("card")
      .update({
        easyFactor: this.#data.easyFactor,
        interval: this.#data.interval,
        lapse: this.#data.lapse,
        type: this.#data.type,
        validity: this.#data.validity,
      })
      .eq("id", this.#data.id)
      .eq("user_id", this.#data.user_id);
    return this;
  }

  static async from(deckId, userId) {
    const { default: supabase } = await import("artifact/supabase");
    const query = supabase
      .from("card")
      .select("*, deck!inner(id, name, paused)")
      .eq("user_id", userId)
      .filter("deck.paused", "eq", false)
      .lte("validity", Validity.expired)
      .limit(1)
      .single();

    if (deckId) query.eq("deck", deckId);

    const { data: card, error } = await query;

    return new Card(card);
  }
}

export default Card;
