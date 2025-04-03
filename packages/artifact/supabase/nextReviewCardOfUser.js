import runLock from "standard/runLock";
import client from "./client";

function nextReviewCardOfUser(userId) {
  return runLock(`nextReviewCardOfUser__${userId}`, () =>
    client.rpc("nextReviewCard", { user_id: userId }),
  );
}

export default nextReviewCardOfUser;
