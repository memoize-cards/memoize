import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/sign-in", function signIn() {
  import("./oauth");
  renderer("<m-sign-in></m-sign-in>");
});
