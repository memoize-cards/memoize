import client from "./client";

async function validCard(validity, deckId, userId) {
  const query = client
    .from("card")
    .select(
      "*, progress(*) deck!inner(id, name, paused, collab!inner(user_id))",
    )
    .eq("deck.paused", false)
    .eq("deck.collab.user_id", userId)
    .lte("validity", validity)
    .limit(1)
    .single();

  deckId && query.eq("deck", deckId);

  return query;
}

export default validCard;
