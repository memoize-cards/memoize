import CaretLeft from './caretLeft.svg'
import CaretRight from './caretRight.svg'
import TrendUp from './trendUp.svg'

function mapper (key) {
  return { CaretLeft, CaretRight, TrendUp }[key]
}

export default mapper
