import runLock from "standard/runLock";
import client from "./client";

function habitOfUserLogged() {
  return runLock("habit", () =>
    client
      .from("habit")
      .select("date, goalAchieved")
      .order("date", { ascending: true })
      .limit(7),
  );
}

export default habitOfUserLogged;
