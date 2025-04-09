import percentageOfTotal from "./percentageOfTotal";

class Progress {
  #data;

  @Progress.asPercentageOfTotal
  get learn() {
    return (this.#data.learn ??= 0);
  }

  get mastered() {
    return (this.#data.review ??= 0);
  }

  @Progress.asPercentageOfTotal
  get relearn() {
    return (this.#data.relearn ??= 0);
  }

  @Progress.asPercentageOfTotal
  get review() {
    return (this.#data.review ??= 0);
  }

  get total() {
    return Object.values(this.#data).reduce((x, y) => x + y);
  }

  constructor(data) {
    this.#data = data;
  }

  static asPercentageOfTotal(_target, _key, descriptor) {
    const count = descriptor.get;

    Object.assign(descriptor, {
      get() {
        return percentageOfTotal(count.call(this), this.total);
      },
    });

    return descriptor;
  }

  static async ofUserLogged() {
    const { getUserLogged, progressOfUser } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    const { data: progress } = await progressOfUser(user.id);
    return new Progress(progress);
  }
}

export default Progress;
