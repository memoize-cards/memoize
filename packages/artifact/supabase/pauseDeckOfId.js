import client from "./client";

function pauseDeckOfId(deckId) {
  return client
    .from("deck")
    .update({ paused: true })
    .eq("id", deckId)
    .select()
    .single();
}

export default pauseDeckOfId;
