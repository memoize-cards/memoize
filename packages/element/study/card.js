class Card {
  #data;

  get validity() {
    return this.#data?.validity;
  }

  constructor(data) {
    this.#data = data;
  }

  static async from(deckId, userId) {
    const { default: supabase } = await import("artifact/supabase");
    const { data: card } = await supabase
      .from("card")
      .select("validity")
      .eq("deck", deckId)
      .eq("user_id", userId)
      .order("validity", { ascending: true })
      .limit(1)
      .single();
    return new Card(card);
  }
}

export default Card;
