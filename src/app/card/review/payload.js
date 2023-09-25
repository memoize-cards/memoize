const payload = {
  create (data) {
    return {
      easyFactor: data.easyFactor,
      interval: data.interval,
      lapse: data.lapse,
      type: data.type
    }
  }
}

export default payload
