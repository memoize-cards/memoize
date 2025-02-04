import { urlFor } from "standard/router";

const Navigate = {
  goToSite() {
    history.pushState({}, "", urlFor("site"));
    return this;
  },
};

export default Navigate;
