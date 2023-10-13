import type from '@app/deck/stats/type'

const payload = {
  create () {
    return {
      type: type.LEARN
    }
  }
}

export default payload
