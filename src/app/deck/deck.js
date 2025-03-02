import { params } from "standard/router";
import Progress from "./progress";

class Deck {
  #cards;
  #data;
  #progress;

  get cover() {
    return this.#data.cover;
  }

  get description() {
    return this.#data.description;
  }

  get id() {
    return this.#data.id;
  }

  get name() {
    return this.#data.name;
  }

  get progress() {
    return (this.#progress ??= Progress.from(this.#data.cards));
  }

  constructor(data) {
    this.#data = data;
  }

  static async current() {
    const { default: supabase } = await import("artifact/supabase");
    const { data: deck } = await supabase
      .from("deck")
      .select("id, cover, description, name, cards:card(type, validity)")
      .eq("id", params.deck)
      .single();
    return new Deck(deck);
  }
}

export default Deck;
