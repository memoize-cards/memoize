import { urlFor } from "standard/router";

const Navigate = {
  goToCard(deckId) {
    history.pushState({}, "", urlFor("card", { deck: deckId }));
    return this;
  },
};

export default Navigate;
