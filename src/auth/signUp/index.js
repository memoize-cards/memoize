import renderer from "standard/renderer";
import router from "standard/router";

router("/auth/sign-up", function signUp() {
  import("./auth");
  renderer("<m-sign-up></m-sign-up>");
});
