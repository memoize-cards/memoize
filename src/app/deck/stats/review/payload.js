import type from '@app/deck/stats/type'

const payload = {
  create () {
    return {
      type: type.REVIEW
    }
  }
}

export default payload
