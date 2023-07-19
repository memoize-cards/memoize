/**
 * Revoke - Proxy-Based Class Revocation
 *
 * @param {Class} ClassRef - The class reference to be revoked.
 * @returns {Proxy} A revoked proxy for the class.
 */
function revoke (ClassRef) {
  return new Proxy(
    function (...args) {
      let instance

      /**
       * Revoked Proxy Handler
       *
       * @param {...any} args - Arguments passed to the class constructor.
       * @returns {Proxy} The revoked proxy instance.
       */
      return new Proxy(
        {
          /**
           * Get the instance of the class.
           *
           * @returns {Object} The class instance.
           */
          get instance () {
            return (instance ??= new ClassRef(...args))
          }
        },
        {
          /**
           *
           * Get the value of a property from the class instance.
           *
           * @param {Object} target - The target object.
           * @param {string} key - The property key.
           * @returns {*} The value of the property.
           */
          get (target, key) {
            const prop = Reflect.get(target.instance, key)
            return prop?.bind?.(target.instance) ?? prop
          },

          /**
           * Set the value of a property in the class instance.
           *
           * @param {Object} target - The target object.
           * @param {string} key - The property key.
           * @param {*} value - The value to set.
           * @returns {boolean} Returns true if the property was set successfully.
           */
          set (target, key, value) {
            Reflect.set(target.instance, key, value)
            return true
          }
        }
      )
    },
    {
      /**
       * Get the value of a static property from the class reference.
       *
       * @param {Object} _ - The target object.
       * @param {string} key - The property key.
       * @returns {*} The value of the static property.
       */
      get: (_, key) => Reflect.get(ClassRef, key),

      /**
       * Set the value of a static property in the class reference.
       *
       * @param {Object} _ - The target object.
       * @param {string} key - The property key.
       * @param {*} value - The value to set.
       * @returns {boolean} Returns true if the static property was set successfully.
       */
      set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
    }
  )
}

export default revoke
