import renderer from "standard/renderer";
import router from "standard/router";

router("/app/deck/:deck/card", function cardByDeck() {
  import("./app");
  renderer("<memo-card-by-deck></memo-card-by-deck>");
});
