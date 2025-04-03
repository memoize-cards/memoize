import runLock from "standard/runLock";
import client from "./client";

function nextReviewCard(userId) {
  return runLock(`nextReviewCard__${userId}`, () =>
    client.rpc("nextReviewCard", { user_id: userId }),
  );
}

export default nextReviewCard;
