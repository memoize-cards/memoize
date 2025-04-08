import client from "./client";

function deleteCardOfId(cardId) {
  return client.from("card").delete().eq("id", cardId);
}

export default deleteCardOfId;
