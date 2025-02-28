import renderer from "standard/renderer";
import router from "standard/router";

router("/app/how-works", function howWorks() {
  import("./app");
  renderer("<m-how-works></m-how-works>");
});
