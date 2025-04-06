import client from "./client";

async function getSession() {
  const { data, error } = await client.auth.getSession();
  return { data: data?.session, error };
}

export default getSession;
