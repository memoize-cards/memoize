import direction from '@elements/stack/invertAlign'

describe('@elements/stack/invertAlign', () => {
  test('It should return align-items when no flex direction is declared', () => {
    const props = {}
    const value = direction(props)
    expect(value).toBe('align-items')
  })

  test('It should return align-items when the flex direciton is declared', () => {
    const props = { row: true }
    const value = direction(props)
    expect(value).toBe('align-items')
  })

  test('It should return justify-content when the flex direciton is declared', () => {
    const props = { column: true }
    const value = direction(props)
    expect(value).toBe('justify-content')
  })
})
