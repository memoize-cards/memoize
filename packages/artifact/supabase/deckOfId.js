import runLock from "standard/runLock";
import client from "./client";

function decksOfId(deckId, userId) {
  return runLock(`decksOfId__${deckId}__${userId}`, async () => {
    return client
      .from("deck")
      .select(
        "id, cover, description, name, paused, cards:card(progress(type, validity))",
      )
      .eq("id", deckId)
      .eq("cards.progress.user_id", userId)
      .single();
  });
}

export default decksOfId;
