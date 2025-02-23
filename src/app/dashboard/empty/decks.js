class Decks {
  #data;

  get length() {
    return this.#data.length;
  }

  constructor(data) {
    this.#data = data;
  }

  static async from(userId) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: decks } = await supabase
      .from("deck")
      .select("id")
      .eq("user_id", userId);
    return new Decks(decks);
  }
}

export default Decks;
