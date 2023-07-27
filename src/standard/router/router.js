import handle from './handle'
import listeners from './listeners'

/**
 * Create a router for managing routes and handling navigation.
 *
 * This function is used to create a router for managing routes in the application.
 * It allows adding route listeners that map paths to page functions. The route listeners
 * are stored in the 'listeners' array, and the 'handle' function can be used to handle
 * the current URL navigation based on the registered routes.
 *
 * @function
 * @param {string} path - The path pattern for the route (e.g., '/users/:id/posts').
 * @param {Function} page - The function to be executed when the route is matched.
 * @returns {Function} The 'router' function, enabling method chaining for adding more routes.
 */
function router (path, page) {
  listeners.push({ path, page })
  return router
}

/**
 * Assign the 'handle' function to the 'router' function object
 */
Object.assign(router, {
  handle
})

export default router
