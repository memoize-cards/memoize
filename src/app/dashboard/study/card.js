import Validity from "./validity";

class Card {
  #nextReviewDate;
  #totalReviewCards;

  get nextReviewDate() {
    return (this.#nextReviewDate ??= 0);
  }

  get totalReviewCards() {
    return (this.#totalReviewCards ??= 0);
  }

  constructor(totalReviewCards, nextReviewDate) {
    this.#totalReviewCards = totalReviewCards;
    this.#nextReviewDate = nextReviewDate;
  }

  static async current() {
    const { default: supabase } = await import("artifact/supabase");

    const { count: totalReviewCards } = await supabase
      .from("card")
      .select("id, deck!inner(paused)", { count: "exact", head: true })
      .filter("deck.paused", "eq", false)
      .lte("validity", Validity.expired);

    const { data: nextCard } = await supabase
      .from("card")
      .select("validity, deck!inner(paused)")
      .filter("deck.paused", "eq", false)
      .order("validity", { ascending: true })
      .limit(1)
      .single();

    return new Card(totalReviewCards, nextCard?.validity);
  }
}

export default Card;
