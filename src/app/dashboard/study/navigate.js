import { urlFor } from "standard/router";

const Navigate = {
  goToCard() {
    history.pushState({}, "", urlFor("card"));
    return this;
  },
};

export default Navigate;
