import { urlFor } from "standard/router";

function goToDashboard() {
  history.pushState({}, "", urlFor("dashboard"));
}

export default goToDashboard;
