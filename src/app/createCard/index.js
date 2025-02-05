import renderer from "standard/renderer";
import router from "standard/router";

router("/app/deck/:deck/card/create", function createCard() {
  import("./app");
  renderer("<memo-create-card></memo-create-card>");
});
