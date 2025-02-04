import { urlFor } from "standard/router";

const Navigate = {
  goToDashboard() {
    history.pushState({}, "", urlFor("dashboard"));
    return this;
  },

  goToDeck(deckId) {
    history.pushState({}, "", urlFor("deck", { deck: deckId }));
    return this;
  },
};

export default Navigate;
