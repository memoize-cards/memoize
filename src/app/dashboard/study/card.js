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

  static async from(userId) {
    const { default: supabase } = await import("artifact/supabase");

    const { count: totalReviewCards } = await supabase
      .from("card")
      .select("id", { count: "exact", head: true })
      .eq("user_id", userId)
      .lte("validity", Validity.expired);

    const { data: nextCard } = await supabase
      .from("card")
      .select("validity")
      .eq("user_id", userId)
      .order("validity", { ascending: true })
      .limit(1)
      .single();

    return new Card(totalReviewCards, nextCard?.validity);
  }
}

export default Card;
