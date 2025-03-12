import { urlFor } from "standard/router";

function goToDashboard() {
  history.pushState({ name: "Cleitobas" }, "", urlFor("dashboard"));
}

export default goToDashboard;
