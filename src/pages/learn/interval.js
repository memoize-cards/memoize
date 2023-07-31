import * as f from '@standard/f'

class Interval {
  static get value () {
    return f.add(new Date().getTime(), 60000 /* 1m */)
  }
}

export default Interval
