import { urlFor } from "standard/router";

const Navigate = {
  goToStudyCompleted() {
    history.pushState({}, "", urlFor("studyCompleted"));
    return this;
  },

  goToStudyCompletedOfDeck(deckId) {
    history.pushState({}, "", urlFor("studyCompletedOfDeck", { deck: deckId }));
    return this;
  },
};

export default Navigate;
