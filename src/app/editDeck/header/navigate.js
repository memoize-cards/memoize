import { urlFor } from "standard/router";

const Navigate = {
  goToDashboard() {
    history.pushState({}, "", urlFor("dashboard"));
    return this;
  },
};

export default Navigate;
