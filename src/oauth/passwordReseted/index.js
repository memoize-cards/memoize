import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/email-verification", function emailVerification() {
  import("./oauth");
  renderer("<memo-email-verification></memo-email-verification>");
});
