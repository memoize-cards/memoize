import client from "./client";

function signOut() {
  return client.auth.signOut({ scope: "local" });
}

export default signOut;
