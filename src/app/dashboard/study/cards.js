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
    const { nextReviewCardOfUserLogged, totalReviewCardsOfUserLogged } =
      await import("artifact/supabase");
    const { count: totalReviewCards } = await totalReviewCardsOfUserLogged(
      Validity.expired,
    );
    const { data: nextCard } = await nextReviewCardOfUserLogged();

    return new Cards(totalReviewCards, nextCard?.validity);
  }
}

export default Cards;
