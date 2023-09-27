import family from '@elements/text/family'

describe('@elements/text/family', () => {
  test('It should return base when no family is declared', () => {
    const props = {}
    const value = family(props)
    expect(value).toBe('var(--font-family-base)')
  })

  test('It should return base when the base family is declared', () => {
    const props = { base: true }
    const value = family(props)
    expect(value).toBe('var(--font-family-base)')
  })

  test('It should return highlight when the highlight family is declared', () => {
    const props = { highlight: true }
    const value = family(props)
    expect(value).toBe('var(--font-family-highlight)')
  })
})
