import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/forgot-password", function forgotPassword() {
  import("./oauth");
  renderer("<memo-forgot-password></memo-forgot-password>");
});
