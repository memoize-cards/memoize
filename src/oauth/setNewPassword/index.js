import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/set-new-password", function forgotPassword() {
  import("./oauth");
  renderer("<m-set-new-password></m-set-new-password>");
});
