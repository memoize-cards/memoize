import { urlFor } from "standard/router";

const Navigate = {
  goToDeck(deckId) {
    history.pushState({}, "", urlFor("deck", { deck: deckId }));
    return this;
  },
};

export default Navigate;
