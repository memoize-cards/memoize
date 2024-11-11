import renderer from "standard/renderer";
import router from "standard/router";

router("/app/dashboard", function dashboard() {
  import("./app");
  renderer("<memo-dashboard></memo-dashboard>");
});
