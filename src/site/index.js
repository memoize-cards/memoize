import renderer from "standard/renderer";
import router from "standard/router";

router("/", function site() {
  import("./site");
  renderer("<memo-site></memo-site>");
});
