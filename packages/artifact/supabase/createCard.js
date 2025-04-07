import client from "./client";

function createDeck(data) {
  return client.from("card").insert([data]).select().single();
}

export default createDeck;
