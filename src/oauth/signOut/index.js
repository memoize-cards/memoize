import renderer from "standard/renderer";
import router from "standard/router";

router("/oauth/sign-out", function signOut() {
  import("./oauth");
  renderer("<m-sign-out></m-sign-out>");
});
