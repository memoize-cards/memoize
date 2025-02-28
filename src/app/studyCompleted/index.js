import renderer from "standard/renderer";
import router from "standard/router";

router("/app/study-completed", function studyCompleted() {
  import("./app");
  renderer("<m-study-completed></m-study-completed>");
});

router("/app/study-completed/deck/:deck", function studyCompletedOfDeck() {
  import("./app");
  renderer("<m-study-completed></m-study-completed>");
});
