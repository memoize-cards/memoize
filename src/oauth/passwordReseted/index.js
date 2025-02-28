import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/email-verification", function emailVerification() {
  import("./oauth");
  renderer("<m-email-verification></m-email-verification>");
});
