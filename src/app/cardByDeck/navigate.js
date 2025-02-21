import { urlFor } from "standard/router";

const Navigate = {
  goToStudyCompletedByDeck(deckId) {
    history.pushState({}, "", urlFor("studyCompletedByDeck", { deck: deckId }));
    return this;
  },
};

export default Navigate;
