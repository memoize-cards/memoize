import { urlFor } from "standard/router";

const Navigate = {
  goToCard(deckId, cardId) {
    history.pushState({}, "", urlFor("deck", { deck: deckId, card: cardId }));
    return this;
  },
};

export default Navigate;
