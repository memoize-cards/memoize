import CaretRight from './caretRight.svg'
import TrendUp from './trendUp.svg'

function mapper (key) {
  return { CaretRight, TrendUp }[key]
}

export default mapper
