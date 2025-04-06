import client from "./client";

function updateDeckOfId(data, deckId) {
  return client.from("deck").update(data).eq("id", deckId).select().single();
}

export default updateDeckOfId;
