import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'
import week from './week'

function component () {
  return (
    <stack.Div>
      {
        week.map((date) => (
          <stack.Div column middle quarck>
            <text.Span master xxxs>{date.namDayOfTheWeek}</text.Span>
            <text.Span master dark md highlight bold>{date.day}</text.Span>
          </stack.Div>
        ))
      }
    </stack.Div>
  )
}

export default component
