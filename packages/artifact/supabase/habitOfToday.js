import client from "./client";

async function habitOfToday(today, userId) {
  const { data: habit, error } = await client
    .from("habit")
    .select("*")
    .eq("date", today)
    .eq("user_id", userId)
    .single();
  return { data: { ...habit, user_id: userId }, error };
}

export default habitOfToday;
