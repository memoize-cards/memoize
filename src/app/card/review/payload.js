const payload = {
  create (data) {
    return {
      easyFactor: data.easyFactor,
      interval: data.interval,
      lapse: data.lapse,
      type: data.type,
      validity: data.validity
    }
  }
}

export default payload
