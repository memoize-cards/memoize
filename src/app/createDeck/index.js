import renderer from "standard/renderer";
import router from "standard/router";

router("/app/deck/create", function createDeck() {
  import("./app");
  renderer("<m-create-deck></m-create-deck>");
});
