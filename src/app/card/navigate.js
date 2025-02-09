import { urlFor } from "standard/router";

const Navigate = {
  goToStudyCompleted(deckId) {
    history.pushState({}, "", urlFor("studyCompleted", { deck: deckId }));
    return this;
  },
};

export default Navigate;
