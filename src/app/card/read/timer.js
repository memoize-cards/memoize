class Timer {
  #durations = [];
  #start;

  get elapsed() {
    return Math.min(
      30000,
      this.#durations.reduce((total, duration) => total + duration, 0),
    );
  }

  reset() {
    this.#durations = [];
    this.#start = undefined;
    return this;
  }

  start() {
    this.#start = Date.now();
    return this;
  }

  stop() {
    if (this.#start) {
      this.#durations.push(Date.now() - this.#start);
      this.#start = undefined;
    }
    return this;
  }

  static now() {
    return new Timer().start();
  }
}

export default Timer;
