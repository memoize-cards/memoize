import renderer from "standard/renderer";
import router from "standard/router";

router("/app/deck/:deck/edit", function editDeck() {
  import("./app");
  renderer("<m-edit-deck></m-edit-deck>");
});
