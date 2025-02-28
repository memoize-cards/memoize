import renderer from "standard/renderer";
import router from "standard/router";

router("/app/dashboard", function dashboard() {
  import("./app");
  renderer("<m-dashboard></m-dashboard>");
});
