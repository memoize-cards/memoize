import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/password-reseted", function passwordReseted() {
  import("./oauth");
  renderer("<m-email-password-reseted></m-email-password-reseted>");
});
