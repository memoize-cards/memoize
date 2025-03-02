import { params } from "standard/router";

class Cards {
  #count;

  get count() {
    return (this.#count ??= 0);
  }

  constructor(count) {
    this.#count = count;
  }

  static async current() {
    const { default: supabase } = await import("artifact/supabase");
    const { count } = await supabase
      .from("card")
      .select("id", { count: "exact", head: true })
      .eq("deck", params.deck);
    return new Cards(count);
  }
}

export default Cards;
