import dayOfTheWeek from './dayOfTheWeek'
import monthDay from './monthDay'
import namesDayOfTheWeek from './namesDayOfTheWeek'
import today from './today'

const week = Array
  .from({ length: 7 })
  .map(() => new Date())
  .map((date, i) => (date.setDate(monthDay - dayOfTheWeek + i), date))
  .map((date) => ({
    day: date.getDate(),
    nameDayOfTheWeek: namesDayOfTheWeek[date.getDay()],
    today: today.is(date)
  }))

export default week
