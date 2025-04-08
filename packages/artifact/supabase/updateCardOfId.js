import client from "./client";

function updateCardOfId(data, cardId) {
  return client.from("card").update(data).eq("id", cardId).select().single();
}

export default updateCardOfId;
