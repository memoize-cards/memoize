import runLock from "standard/runLock";
import client from "./client";

function decksOfUser(userId) {
  return runLock(`decksOfUser__${userId}`, async () => {
    const { data: collabs = [], error } = await client
      .from("collab")
      .select("deck(id, cover, name, cards:card(progress(type)))")
      .eq("user_id", userId)
      .eq("deck.cards.progress.user_id", userId);
    const decks = collabs.map((collab) => collab.deck);
    return { data: decks, error };
  });
}

export default decksOfUser;
