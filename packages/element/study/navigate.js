import { urlFor } from "standard/router";

const Navigate = {
  goToCardOfDeck(deckId) {
    history.pushState({}, "", urlFor("cardOfDeck", { deck: deckId }));
    return this;
  },
};

export default Navigate;
