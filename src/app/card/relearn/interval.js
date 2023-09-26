import * as f from '@standard/f'

class Interval {
  #data

  static get #time () {
    return new Date().getTime()
  }

  constructor (data) {
    this.#data = data
  }

  fourDays () {
    this.#data.interval = f.add(Interval.#time, (4 * 24 * 60 * 60 * 1000))
    return this
  }

  oneDay () {
    this.#data.interval = f.add(Interval.#time, (1 * 24 * 60 * 60 * 1000))
    return this
  }

  temMinutes () {
    this.#data.interval = f.add(Interval.#time, (10 * 60 * 1000))
    return this
  }

  twelveHours () {
    this.#data.interval = f.add(Interval.#time, (12 * 60 * 60 * 1000))
    return this
  }

  static create (data) {
    return new Interval(data)
  }
}

export default Interval
