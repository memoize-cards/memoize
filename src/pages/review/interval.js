class Review {
  static get expired () {
    return new Date().getTime()
  }
}

export default Review
