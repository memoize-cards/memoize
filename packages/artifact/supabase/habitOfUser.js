import runLock from "standard/runLock";
import client from "./client";

function habitOfUser(userId) {
  return runLock(`habitOfUser__${userId}`, () =>
    client
      .from("habit")
      .select("date, goalAchieved")
      .eq("user_id", userId)
      .order("date", { ascending: false })
      .limit(7),
  );
}

export default habitOfUser;
