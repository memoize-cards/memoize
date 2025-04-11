import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/sign-up", function signUp() {
  import("./oauth");
  renderer("<m-sign-up></m-sign-up>");
});
