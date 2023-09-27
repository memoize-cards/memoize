import extractArgs from './extractArgs'
import extractParams from './extractParams'
import findMatchingRoute from './findMatchingRoute'

function handle () {
  const { page, path } = findMatchingRoute()

  extractArgs()
  extractParams(path)

  page?.()
}

export default handle
