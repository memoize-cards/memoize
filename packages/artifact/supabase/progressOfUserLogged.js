import runLock from "standard/runLock";
import client from "./client";

function progressOfUserLogged() {
  return runLock("progress", () => client.from("card").select("type"));
}

export default progressOfUserLogged;
