import runLock from "standard/runLock";
import client from "./client";

function getUser() {
  return runLock("user", () => client.auth.getUser());
}

export default getUser;
