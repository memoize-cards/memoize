import client from "./client";

async function cardsOfDeck(deckId, userId) {
  const { data: cards = [], error } = await client
    .from("card")
    .select("id, front, progress(type)")
    .eq("deck", deckId)
    .eq("progress.user_id", userId);
  return { data: cards, error };
}

export default cardsOfDeck;
