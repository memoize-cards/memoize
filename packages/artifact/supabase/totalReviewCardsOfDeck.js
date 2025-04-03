import runLock from "standard/runLock";
import client from "./client";

function totalReviewCardsOfDeck(deckId, validity, userId) {
  return runLock(`totalReviewCardsOfDeck__${deckId}__${userId}`, () =>
    client.rpc("totalReviewCardsOfDeck", {
      validity,
      deckid: deckId,
      user_id: userId,
    }),
  );
}

export default totalReviewCardsOfDeck;
