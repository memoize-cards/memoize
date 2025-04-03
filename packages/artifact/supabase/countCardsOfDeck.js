import runLock from "standard/runLock";
import client from "./client";

function countCardsOfDeck(deckId) {
  return runLock(`countCardsOfDeck__${deckId}`, async () => {
    const { count } = await client
      .from("card")
      .select("id", { count: "exact", head: true })
      .eq("deck", deckId);
    return { data: count ?? 0 };
  });
}

export default countCardsOfDeck;
