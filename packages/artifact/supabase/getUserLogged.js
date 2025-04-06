import runLock from "standard/runLock";
import client from "./client";

function getUserLogged() {
  return runLock("getUserLogged", async () => {
    const {
      data: { user } = {},
      error,
    } = await client.auth.getUser();
    return { data: user, error };
  });
}

export default getUserLogged;
