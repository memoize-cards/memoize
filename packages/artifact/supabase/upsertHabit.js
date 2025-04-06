import client from "./client";

function upsertHabit(data) {
  return client.from("habit").upsert([data], { onConflict: ["id"] });
}

export default upsertHabit;
