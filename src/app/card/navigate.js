import { urlFor } from "standard/router";

const Navigate = {
  goToStudyCompleted() {
    history.pushState({}, "", urlFor("studyCompleted"));
    return this;
  },
};

export default Navigate;
