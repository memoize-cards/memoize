import CaretLeft from './media/caretLeft.svg'
import CaretRight from './media/caretRight.svg'
import Live from './media/live.svg'
import TrendUp from './media/trendUp.svg'

/**
 * Retrieves the corresponding icon component based on the provided key.
 *
 * @param {string} key - The key representing the desired icon component.
 * @returns {import('path/to/icon/component')} The icon component corresponding to the provided key.
 */
function mapper (key) {
  return { CaretLeft, CaretRight, Live, TrendUp }[key]
}

export default mapper
