import renderer from "standard/renderer";
import router from "standard/router";

router("/app/deck/:deck/card", function cardOfDeck() {
  import("./app");
  renderer("<m-card></m-card>");
});

router("/app/card", function card() {
  import("./app");
  renderer("<m-card></m-card>");
});
