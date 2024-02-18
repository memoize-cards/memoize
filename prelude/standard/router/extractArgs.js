import args from './args'

function extractArgs () {
  const search = new URLSearchParams(location.search)
  Array.from(search.entries()).forEach(([key, value]) => Reflect.set(args, key, value))
}

export default extractArgs
