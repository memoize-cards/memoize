import h from '@standard/h'
import Metro from '@elements/metro'

function component (carousel) {
  return (
    <section>
      <Metro>
        {carousel.cards}
      </Metro>
    </section>
  )
}

export default component
