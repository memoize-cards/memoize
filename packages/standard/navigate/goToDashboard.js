import { urlFor } from "standard/router";

function goToDashboard() {
  history.pushState({}, "", urlFor("dashboard"));
  return this;
}

export default goToDashboard;
