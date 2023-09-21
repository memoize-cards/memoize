import bots from './bots'

const agent = {
  get bot () {
    return bots.test(navigator.userAgent)
  },

  get user () {
    return !bots.test(navigator.userAgent)
  }
}

export default agent
