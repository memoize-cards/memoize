import * as f from '@standard/f'

class Interval {
  static get oneMinute () {
    return f.add(new Date().getTime(), (1 * 60 * 1000))
  }
}

export default Interval
