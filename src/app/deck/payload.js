import { params } from '@standard/router'

const payload = {
  create () {
    return {
      id: params.id
    }
  }
}

export default payload
