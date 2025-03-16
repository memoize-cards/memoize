import runLock from "standard/runLock";
import client from "./client";

function nextReviewCardOfUserLogged() {
  return runLock("nextReviewCard", () =>
    client
      .from("card")
      .select("validity, deck!inner(paused)")
      .filter("deck.paused", "eq", false)
      .order("validity", { ascending: true })
      .limit(1)
      .single(),
  );
}

export default nextReviewCardOfUserLogged;
