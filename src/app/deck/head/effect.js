import { repaint } from '@standard/h'
import { useEffect } from '@standard/global'
import middleware from '@standard/middleware'

const effect = middleware((head) => {
  useEffect(() => head[repaint.reflow]?.())
})

export default effect
