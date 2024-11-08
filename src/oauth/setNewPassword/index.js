import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/set-new-password", function forgotPassword() {
  import("./oauth");
  renderer("<memo-set-new-password></memo-set-new-password>");
});
