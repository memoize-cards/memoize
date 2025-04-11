import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/password-reseted", function passwordReseted() {
  import("./oauth");
  renderer("<m-password-reseted></m--password-reseted>");
});
