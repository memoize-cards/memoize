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
import '@pixel/sw'

/**
 * Imports pages modules.
 *
 * @module Pages
 */
import '@pages/fresh'
import '@pages/review'

/**
 * Handles the router to manage navigation and page rendering.
 */
router.handle()
