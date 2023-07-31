import * as f from '@standard/f'

class Interval {
  static get fourDays () {
    return f.add(new Date().getTime(), (4 * 24 * 60 * 60 * 1000))
  }

  static get oneDay () {
    return f.add(new Date().getTime(), (1 * 24 * 60 * 60 * 1000))
  }

  static get temMinutes () {
    return f.add(new Date().getTime(), (10 * 60 * 1000))
  }

  static get twelveHours () {
    return f.add(new Date().getTime(), (12 * 60 * 60 * 1000))
  }
}

export default Interval
