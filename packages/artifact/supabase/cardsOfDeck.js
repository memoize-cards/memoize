import runLock from "standard/runLock";
import client from "./client";

function cardsOfDeck(deckId, userId) {
  return runLock(`cardsOfDeck__${deckId}__${userId}`, async () => {
    const { data: cards = [], error } = await client
      .from("card")
      .select("id, front, progress(type)")
      .eq("deck", deckId)
      .eq("progress.user_id", userId);
    return { data: cards, error };
  });
}

export default cardsOfDeck;
