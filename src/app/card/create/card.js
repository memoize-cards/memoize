import { params } from "standard/router";
import Interval from "./interval";
import Type from "./type";
import Validity from "./validity";

const Card = {
  async create(data, userId) {
    const { createCard } = await import("artifact/supabase");
    await createCard({
      ...data,
      deck: params.deck,
      interval: Interval.oneMinute,
      type: Type.LEARN,
      user_id: userId,
      validity: Validity.now,
    });
    return Card;
  },
};

export default Card;
