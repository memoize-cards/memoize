import { params } from "standard/router";

class Deck {
  #data;

  get id() {
    return this.#data.id;
  }

  get paused() {
    return (this.#data.paused ??= false);
  }

  constructor(data) {
    this.#data = data;
  }

  async delete() {
    const { default: supabase } = await import("artifact/supabase");
    await supabase.from("deck").delete().eq("id", params.deck);
    this.#data = {};
    return this;
  }

  async pause() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .update({ paused: true })
      .eq("id", this.id)
      .select()
      .single();
    this.#data = deck;
    return this;
  }

  async play() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .update({ paused: false })
      .eq("id", this.id)
      .select()
      .single();
    this.#data = deck;
    return this;
  }

  static async current() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .select("id, paused")
      .eq("id", params.deck)
      .single();
    return new Deck(deck);
  }
}

export default Deck;
