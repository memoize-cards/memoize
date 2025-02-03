import { urlFor } from "standard/router";

const Navigate = {
  toGoDashboard() {
    history.pushState({}, "", urlFor("dashboard"));
    return this;
  },
};

export default Navigate;
