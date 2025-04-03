import runLock from "standard/runLock";
import client from "./client";

function nextReviewCardOfUser(deckId, userId) {
  return runLock(`nextReviewCardOfDeck__${deckId}__${userId}`, () =>
    client.rpc("nextReviewCardOfDeck", { deckid: deckId, user_id: userId }),
  );
}

export default nextReviewCardOfUser;
