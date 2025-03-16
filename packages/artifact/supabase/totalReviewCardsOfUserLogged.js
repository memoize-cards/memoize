import runLock from "standard/runLock";
import client from "./client";

function totalReviewCardsOfUserLogged(validity) {
  return runLock("totalReviewCards", () =>
    client
      .from("card")
      .select("id, deck!inner(paused)", { count: "exact", head: true })
      .filter("deck.paused", "eq", false)
      .lte("validity", validity),
  );
}

export default totalReviewCardsOfUserLogged;
