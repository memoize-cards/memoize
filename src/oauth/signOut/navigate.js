import { urlFor } from "standard/router";

const Navigate = {
  toGoSite() {
    history.pushState({}, "", urlFor("site"));
    return this;
  },
};

export default Navigate;
