import renderer from "standard/renderer";
import router from "standard/router";

router("/app/how-works", function howWorks() {
  import("./app");
  renderer("<memo-how-works></memo-how-works>");
});
