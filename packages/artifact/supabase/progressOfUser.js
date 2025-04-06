import runLock from "standard/runLock";
import client from "./client";

function progressOfUser(userId) {
  return runLock(`progressOfUser__${userId}`, async () => {
    const { data: collabs, error } = await client
      .from("collab")
      .select("deck(cards:card(progress(type)))")
      .eq("user_id", userId)
      .eq("deck.cards.progress.user_id", userId);
    const decks = collabs.map((collab) => collab.deck);
    const cards = decks
      .map((deck) => deck.cards)
      .flat(Number.POSITIVE_INFINITY);
    return { data: cards, error };
  });
}

export default progressOfUser;
