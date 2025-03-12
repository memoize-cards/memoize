import { urlFor } from "standard/router";

function goToEmailVerification(email) {
  history.pushState({}, "", `${urlFor("emailVerification")}?email=${email}`);
}

export default goToEmailVerification;
