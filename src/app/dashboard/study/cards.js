import Validity from "./validity";

class Cards {
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

  static async reviewStats() {
    const { getUserLogged, nextReviewCard, totalReviewCards } = await import(
      "artifact/supabase"
    );
    const { data: user } = await getUserLogged();
    const { data: totalReview } = await totalReviewCards(
      Validity.expired,
      user.id,
    );
    const { data: nextReview } = await nextReviewCard(user.id);
    return new Cards(totalReview, nextReview);
  }
}

export default Cards;
