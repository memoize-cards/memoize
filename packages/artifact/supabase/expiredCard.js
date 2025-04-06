import client from "./client";

async function expiredCard(deckId, userId) {
  return client.rpc("expired_card", { deckid: deckId ?? null, userid: userId }).single()
}

export default expiredCard;
