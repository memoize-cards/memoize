import * as f from '@standard/f'
import magic from '@standard/magic'
import repaint from './repaint'

function reflow (parent, nParent) {
  f
    .zip(parent, nParent)
    .forEach(([item, nItem]) => {
      if (!item && nItem) return parent[reflow.add](nItem)
      if (item && !nItem) return parent[reflow.remove](item)
      if (item[reflow.same]?.(nItem)) return
      if (item[reflow.different](nItem)) return parent[reflow.replace](item, nItem)
      item[repaint.reflow]?.(nItem)
    })
}

Object.assign(reflow, {
  add: magic.reflow_add,
  different: magic.reflow_different,
  remove: magic.reflow_remove,
  replace: magic.reflow_replace,
  same: magic.reflow_same
})

export default reflow
