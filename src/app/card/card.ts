import { valueOf } from "standard/interface";
import { params } from "standard/router";
import Progress from "./progress";

class Card {
  #data;
  #deck;
  #progress;

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
    return this.#data?.deck;
  }

  get front() {
    return this.#data?.front;
  }

  get id() {
    return this.#data?.id;
  }

  get notExist() {
    return !this.#data;
  }

  get type() {
    return this.#data?.type;
  }

  constructor(data) {
    this.#data = data;
    this.#progress = Progress.from((this.#data));
  }

  @Card.#update
  async again() {
    this.#progress.again();
    return this;
  }

  @Card.#update
  async easy() {
    this.#progress.easy();
    return this;
  }

  @Card.#update
  async good() {
    this.#progress.good();
    return this;
  }

  @Card.#update
  async hard() {
    this.#progress.hard();
    return this;
  }

  [valueOf]() {
    const data = {
      id: this.#data.id,
      card: this.#data.card,
      easyFactor: this.#data.easyFactor,
      interval: this.#data.interval,
      lapse: this.#data.lapse,
      type: this.#data.type,
      validity: this.#data.validity,
      user_id: this.#data.user_id,
    };
    !this.#data.id && delete data.id;
    return data;
  }

  static #update(_target, _key, descriptor) {
    const method = descriptor.value;

    Object.assign(descriptor, {
      async value() {
        method.call(this);
        const { upsertProgress } = await import("artifact/supabase");
        await upsertProgress(this[valueOf]());
        return this;
      },
    });

    return descriptor;
  }

  static async current() {
    const { getUserLogged, expiredCard } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: card } = await expiredCard(
      params.deck,
      user.id,
    );
    return new Card(card);
  }
}

export default Card;
