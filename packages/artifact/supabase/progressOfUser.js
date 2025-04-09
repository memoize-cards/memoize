import runLock from "standard/runLock";
import client from "./client";

const Type = {
  map(n) {
    return (
      {
        1: "learn",
        2: "review",
        3: "relearn",
      }[n] ?? "learn"
    );
  },
};

function progressOfUser(userId) {
  return runLock(`progressOfUser__${userId}`, async () => {
    const { data: collabs, error } = await client
      .from("collab")
      .select("deck(cards:card(progress(type)))")
      .eq("user_id", userId)
      .eq("deck.cards.progress.user_id", userId);
    const decks = collabs.map((collab) => collab.deck);
    const cards = decks
      .map((deck) => deck.cards)
      .flat(Number.POSITIVE_INFINITY);
    const progress = cards?.group((card) =>
      Type.map(card?.progress?.[0]?.type),
    );
    return {
      data: {
        learn: progress?.learn?.length ?? 0,
        review: progress?.review?.length ?? 0,
        relearn: progress?.relearn?.length ?? 0,
      },
      error,
    };
  });
}

export default progressOfUser;
