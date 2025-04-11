import renderer from "standard/renderer";
import router from "standard/router";

router("/auth/sign-out", function signOut() {
  import("./auth");
  renderer("<m-sign-out></m-sign-out>");
});
