import runLock from "standard/runLock";
import client from "./client";

function getSession() {
  return runLock("session", () => client.auth.getSession());
}

export default getSession;
