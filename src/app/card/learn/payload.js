const payload = {
  create (data) {
    return {
      easyFactor: data.easyFactor,
      interval: data.interval,
      type: data.type
    }
  }
}

export default payload
