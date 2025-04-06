import runLock from "standard/runLock";
import client from "./client";

function totalReviewCards(validity, userId) {
  return runLock(`totalReviewCards__${userId}`, () =>
    client.rpc("totalReviewCards", { validity, user_id: userId }),
  );
}

export default totalReviewCards;
