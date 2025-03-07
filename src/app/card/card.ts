import { params } from "standard/router";
import Deck from "./deck";
import { __data__ } from "./interfaces";
import Phase from "./phase";
import Validity from "./validity";

class Card {
  #phase;
  #data;
  #deck;

  get back() {
    return (async () => {
      const { default: showdown } = await import("artifact/showdown");
      return showdown.makeHtml(this.#data?.back);
    })();
  }

  get cover() {
    return this.#data?.cover;
  }

  get deck() {
    return (this.#deck ??= Deck.from(this.#data?.deck));
  }

  get front() {
    return this.#data?.front;
  }

  get id() {
    return this.#data?.id;
  }

  get type() {
    return this.#data?.type;
  }

  constructor(data) {
    this.#data = data;
    this.#phase = Phase.from(this.#data);
  }

  @Card.#update
  async again() {
    this.#phase.again();
    return this;
  }

  @Card.#update
  async easy() {
    this.#phase.easy();
    return this;
  }

  @Card.#update
  async good() {
    this.#phase.good();
    return this;
  }

  @Card.#update
  async hard() {
    this.#phase.hard();
    return this;
  }

  [__data__]() {
    return {
      easyFactor: this.#data.easyFactor,
      interval: this.#data.interval,
      lapse: this.#data.lapse,
      type: this.#data.type,
      validity: this.#data.validity,
    };
  }

  static #update(_target, _key, descriptor) {
    const method = descriptor.value;

    Object.assign(descriptor, {
      async value() {
        method.call(this);
        const data = this[__data__]();
        const { default: supabase } = await import("artifact/supabase");
        await supabase.from("card").update(data).eq("id", this.id);
        return this;
      },
    });

    return descriptor;
  }

  static async current() {
    const { default: supabase } = await import("artifact/supabase");
    const query = supabase
      .from("card")
      .select("*, deck!inner(id, name, paused)");

    query.eq("deck.paused", false);
    query.lte("validity", Validity.expired);
    query.limit(1);
    query.single();

    params.deck && query.eq("deck", params.deck);

    const { data: card } = await query;
    return new Card(card);
  }
}

export default Card;
