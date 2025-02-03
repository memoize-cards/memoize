import { urlFor } from "standard/router";

const Navigate = {
  goToPasswordReseted() {
    history.pushState({}, "", urlFor("passwordReseted"));
    return this;
  },
};

export default Navigate;
