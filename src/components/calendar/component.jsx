import h from '@standard/h'
import style from './style'
import week from './week'

function component () {
  return (
    <div className={style.calendar}>
      {
        week.map((date) => (
          <div className={style.calendar__dayOfTheWeek} today={date.today}>
            <span className={style.calendar__nameDayOfTheWeek}>{date.nameDayOfTheWeek}</span>
            <span className={style.calendar__day}>{date.day}</span>
          </div>
        ))
      }
    </div>
  )
}

export default component
