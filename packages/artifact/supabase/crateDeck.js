import client from "./client";

function createDeck(data) {
  return client.from("deck").insert([data]).select().single();
}

export default createDeck;
