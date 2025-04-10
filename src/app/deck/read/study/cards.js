import { params } from "standard/router";
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
    const { getUserLogged, nextReviewCardOfDeck, totalReviewCardsOfDeck } =
      await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: totalReviewCards } = await totalReviewCardsOfDeck(
      params.deck,
      Validity.expired,
      user.id,
    );
    const { data: nextCard } = await nextReviewCardOfDeck(params.deck, user.id);
    return new Cards(totalReviewCards, nextCard);
  }
}

export default Cards;
