import { urlFor } from "standard/router";

const Navigate = {
  toGoStudyCompleted(deckId) {
    history.pushState({}, "", urlFor("studyCompleted", { deck: deckId }));
    return this;
  },
};

export default Navigate;
