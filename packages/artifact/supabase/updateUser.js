import client from "./client";

function updateUser(data) {
  return client.auth.updateUser(data);
}

export default updateUser;
