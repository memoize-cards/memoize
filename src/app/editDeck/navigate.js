import { params, urlFor } from "standard/router";

const Navigate = {
  goToDeck() {
    history.pushState({}, "", urlFor("deck", params));
    return this;
  },
};

export default Navigate;
