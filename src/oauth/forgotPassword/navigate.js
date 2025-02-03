import { urlFor } from "standard/router";

const Navigate = {
  goToEmailVerification(email) {
    history.pushState({}, "", `${urlFor("emailVerification")}?email=${email}`);
    return this;
  },
};

export default Navigate;
