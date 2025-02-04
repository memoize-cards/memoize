import renderer from "standard/renderer";
import router from "standard/router";

router("/app/deck/:deck/edit", function editDeck() {
  import("./app");
  renderer("<memo-edit-deck></memo-edit-deck>");
});
