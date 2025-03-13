import runLock from "standard/runLock";
import client from "./client";

function decksOfUserLogged() {
  return runLock("decks", () =>
    client.from("deck").select("id, cover, name, cards:card(type)"),
  );
}

export default decksOfUserLogged;
