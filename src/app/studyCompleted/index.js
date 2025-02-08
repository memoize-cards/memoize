import renderer from "standard/renderer";
import router from "standard/router";

router("/app/deck/:deck/study-completed", function studyCompleted() {
  import("./app");
  renderer("<memo-study-completed></memo-study-completed>");
});
