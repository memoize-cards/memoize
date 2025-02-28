import { params } from "standard/router";
import Interval from "./interval";
import Type from "./type";
import Validity from "./validity";

const Card = {
  async create(data, userId) {
    const payload = {
      ...data,
      deck: params.deck,
      interval: Interval.oneMinute,
      type: Type.LEARN,
      user_id: userId,
      validity: Validity.now,
    };
    const { default: supabase } = await import("artifact/supabase");
    return supabase.from("card").insert([payload]);
  },
};

export default Card;
