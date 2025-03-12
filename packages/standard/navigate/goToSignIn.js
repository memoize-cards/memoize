import { urlFor } from "standard/router";

function goToSignIn() {
  history.pushState({}, "", urlFor("signIn"));
}

export default goToSignIn;
