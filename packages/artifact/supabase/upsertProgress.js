import client from "./client";

function upsertProgress(data) {
  return client.from("progress").upsert([data], { onConflict: ["id"] });
}

export default upsertProgress;
