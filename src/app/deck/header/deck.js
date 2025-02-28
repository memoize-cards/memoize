import { params } from "standard/router";

class Deck {
  #data;

  get paused() {
    return (this.#data.paused ??= false);
  }

  constructor(data) {
    this.#data = data;
  }

  static async current() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .select("paused")
      .eq("id", params.deck)
      .single();
    return new Deck(deck);
  }
}

export default Deck;
