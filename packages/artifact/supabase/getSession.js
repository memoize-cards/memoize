import client from "./client";

function getSession() {
  return client.auth.getSession();
}

export default getSession;
