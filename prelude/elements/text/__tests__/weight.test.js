import weight from '@elements/text/weight'

describe('@elements/text/weight', () => {
  test('It should return regular when no position is declared', () => {
    const props = {}
    const value = weight(props)
    expect(value).toBe('var(--font-weight-regular)')
  })

  test('It should return bold when the bold position is declared', () => {
    const props = { bold: true }
    const value = weight(props)
    expect(value).toBe('var(--font-weight-bold)')
  })

  test('It should return medium when the medium position is declared', () => {
    const props = { medium: true }
    const value = weight(props)
    expect(value).toBe('var(--font-weight-medium)')
  })

  test('It should return regular when the regular position is declared', () => {
    const props = { regular: true }
    const value = weight(props)
    expect(value).toBe('var(--font-weight-regular)')
  })
})
