import renderer from "standard/renderer";
import router from "standard/router";

router("/app/deck/:deck", function deck() {
  import("./app");
  renderer("<memo-deck></memo-deck>");
});
