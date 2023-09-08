function define (name, options) {
  return (ClassRef) => customElements.define(name, ClassRef, options)
}

export default define
