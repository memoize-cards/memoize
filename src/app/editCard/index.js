import renderer from "standard/renderer";
import router from "standard/router";

router("/app/deck/:deck/card/:card/edit", function editCard() {
  import("./app");
  renderer("<m-edit-card></m-edit-card>");
});
