import runLock from "standard/runLock";
import client from "./client";

function cardOfId(cardId, userId) {
  return runLock(`cardOfId__${cardId}__${userId}`, () => {
    return client
      .from("card")
      .select("id, back, cover, front, user_id")
      .eq("id", cardId)
      .eq("user_id", userId)
      .single();
  });
}

export default cardOfId;
