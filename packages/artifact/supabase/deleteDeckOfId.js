import client from "./client";

function deleteDeckOfId(deckId) {
  return client.from("deck").delete().eq("id", deckId);
}

export default deleteDeckOfId;
