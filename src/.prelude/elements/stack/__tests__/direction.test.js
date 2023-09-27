import direction from '@elements/stack/direction'

describe('@elements/stack/direction', () => {
  test('It should return row when no direction is declared', () => {
    const props = {}
    const value = direction(props)
    expect(value).toBe('row')
  })

  test('It should return row when the row direciton is declared', () => {
    const props = { row: true }
    const value = direction(props)
    expect(value).toBe('row')
  })

  test('It should return column when the column direciton is declared', () => {
    const props = { column: true }
    const value = direction(props)
    expect(value).toBe('column')
  })
})
