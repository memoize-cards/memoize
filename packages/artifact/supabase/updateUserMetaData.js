import client from "./client";

function updateUserMetaData(data) {
  return client.auth.updateUser({ data });
}

export default updateUserMetaData;
