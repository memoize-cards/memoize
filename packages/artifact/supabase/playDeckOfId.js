import client from "./client";

function playDeckOfId(deckId) {
  return client
    .from("deck")
    .update({ playd: false })
    .eq("id", deckId)
    .select()
    .single();
}

export default playDeckOfId;
