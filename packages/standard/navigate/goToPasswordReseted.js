import { urlFor } from "standard/router";

function goToPasswordREseted() {
  history.pushState({}, "", urlFor("passwordReseted"));
}

export default goToPasswordREseted;
