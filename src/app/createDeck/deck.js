import User from "./user";

class Deck {
  #data;

  get id() {
    return this.#data.id;
  }

  constructor(data) {
    this.#data = data;
  }

  async create() {
    const user = await User.logged();
    const payload = { ...this.#data, user_id: user.id };
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .insert([payload])
      .select()
      .single();
    this.#data = deck;
    return this;
  }

  static async from(data) {
    return new Deck(data);
  }
}

export default Deck;
