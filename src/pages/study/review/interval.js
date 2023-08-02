import * as f from '@standard/f'

class Interval {
  static get oneDay () {
    return f.add(new Date().getTime(), (1 * 24 * 60 * 60 * 1000))
  }
}

export default Interval
