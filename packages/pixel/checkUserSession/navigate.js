import { urlFor } from "standard/router";

const Navigate = {
  goToSignIn() {
    history.pushState({}, "", urlFor("signIn"));
    return this;
  },
};

export default Navigate;
