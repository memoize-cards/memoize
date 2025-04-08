import client from "./client";

async function getUserMetaData() {
  const {
    data: {
      user: { user_metadata } = {},
    } = {},
    error,
  } = await client.auth.getUser();
  return { data: user_metadata, error };
}

export default getUserMetaData;
