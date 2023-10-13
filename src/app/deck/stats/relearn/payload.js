import type from '@app/deck/stats/type'

const payload = {
  create () {
    return {
      type: type.RELEARN
    }
  }
}

export default payload
