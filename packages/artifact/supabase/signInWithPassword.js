import client from "./client";

function signInWithPassword(data) {
  return client.auth.signInWithPassword(data);
}

export default signInWithPassword;
