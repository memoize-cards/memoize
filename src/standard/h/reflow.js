import * as f from '@standard/f'
import magic from '@standard/magic'
import repaint from './repaint'

/**
 * The reflow function compares two parent objects and performs a reflow operation
 * to update the parent based on the differences with the new parent.
 *
 * @param {Object} parent - The original parent object.
 * @param {Object} nParent - The new parent object to compare with the original.
 */
function reflow (parent, nParent) {
  // Use the 'zip' function from the '@standard/f' library to pair corresponding items in both parents.
  f
    .zip(parent, nParent)
    .forEach(([item, nItem]) => {
      // Perform various checks to determine how to update the parent.
      if (!item && nItem) return parent[reflow.add](nItem)
      if (item && !nItem) return parent[reflow.remove](item)
      if (item[reflow.same]?.(nItem)) return
      if (item[reflow.different](nItem)) return parent[reflow.replace](item, nItem)
      item[repaint.reflow]?.(nItem)
    })
}

/**
 * Symbolic constants used for identifying different operations in the reflow function.
 */
Object.assign(reflow, {
  add: magic.reflow_add,
  different: magic.reflow_different,
  remove: magic.reflow_remove,
  replace: magic.reflow_replace,
  same: magic.reflow_same
})

export default reflow
