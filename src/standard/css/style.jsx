import h from '@standard/h'
import textContent from './textContent'

function component () {
  return (
    <style>{textContent.join(' ')}</style>
  )
}

export default component
