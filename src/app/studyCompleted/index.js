import renderer from "standard/renderer";
import router from "standard/router";

router(
  "/app/deck/:deck/study-completed-by-deck",
  function studyCompletedByDeck() {
    import("./app");
    renderer("<memo-study-completed-by-deck></memo-study-completed-by-deck>");
  },
);
