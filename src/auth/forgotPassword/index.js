import renderer from "standard/renderer";
import router from "standard/router";

router("/auth/forgot-password", function forgotPassword() {
  import("./auth");
  renderer("<m-forgot-password></m-forgot-password>");
});
