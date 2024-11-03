import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/sign-in", function signIn() {
  import("./signIn");
  renderer("<memo-sign-in></memo-sign-in>");
});
