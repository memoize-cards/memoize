import runLock from "standard/runLock";
import client from "./client";

function totalReviewCardsOfUser(validity, userId) {
  return runLock(`totalReviewCardsOfUser__${userId}`, () =>
    client.rpc("totalReviewCards", { validity, user_id: userId }),
  );
}

export default totalReviewCardsOfUser;
