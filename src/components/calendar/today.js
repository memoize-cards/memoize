const today = {
  is (date) {
    return (new Date().getDay() === date.getDay())
  }
}

export default today
