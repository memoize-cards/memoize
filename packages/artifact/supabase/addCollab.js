import client from "./client";

function addCollab(data) {
  return client.from("collab").insert([data]).select().single();
}

export default addCollab;
