import renderer from "standard/renderer";
import router from "standard/router";

router("/auth/sign-in", function signIn() {
  import("./auth");
  renderer("<m-sign-in></m-sign-in>");
});
