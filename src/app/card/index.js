import renderer from "standard/renderer";
import router from "standard/router";

router("/app/deck/:deck/card", function card() {
  import("./app");
  renderer("<memo-card></memo-card>");
});
