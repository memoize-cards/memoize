import { params, urlFor } from "standard/router";

const Navigate = {
  goToDashboard() {
    history.pushState({}, "", urlFor("dashboard"));
    return this;
  },

  goToDeck(deckId) {
    history.pushState({}, "", urlFor("deck", params));
    return this;
  },
};

export default Navigate;
