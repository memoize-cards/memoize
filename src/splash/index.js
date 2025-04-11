import renderer from "standard/renderer";
import router from "standard/router";

router("/", function splash() {
  import("./splash");
  renderer("<m-splash></m-splash>");
});
