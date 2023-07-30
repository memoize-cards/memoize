import router from '@standard/router'

/**
 * Imports polyfill modules to add functionality in browsers that don't support them natively.
 *
 * @module Polyfills
 */
import '@polyfill/group'
import '@polyfill/requestAnimationFrame'
import '@polyfill/setImmediate'

/**
 * Imports project style modules.
 *
 * @module Styles
 */
import '@pixel/reset'
import '@pixel/tokens'

/**
 * Imports pages modules.
 *
 * @module Pages
 */
import '@pages/card'

/**
 * Handles the router to manage navigation and page rendering.
 */
router.handle()
