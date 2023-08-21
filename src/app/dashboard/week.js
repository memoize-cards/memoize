const dayOfTheWeek = new Date().getDay()
const monthDay = new Date().getDate()
const namesDayOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const week = Array
  .from({ length: 7 })
  .map(() => new Date())
  .map((date, i) => (date.setDate(monthDay - dayOfTheWeek + i), date))
  .map((date) => ({
    day: date.getDate(),
    namDayOfTheWeek: namesDayOfTheWeek[date.getDay()]
  }))

export default week
