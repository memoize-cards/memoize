import runLock from "standard/runLock";
import client from "./client";

function deckOfId(deckId, userId) {
  return runLock(`deckOfId__${deckId}__${userId}`, () => {
    return client
      .from("deck")
      .select("*, cards:card(progress(type, validity))")
      .eq("id", deckId)
      .eq("cards.progress.user_id", userId)
      .single();
  });
}

export default deckOfId;
