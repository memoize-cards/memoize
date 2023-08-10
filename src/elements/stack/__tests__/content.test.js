import content from '@elements/stack/content'

describe('@elements/stack/content', () => {
  test('It should return start when no position is declared', () => {
    const props = {}
    const value = content(props)
    expect(value).toBe('start')
  })

  test('It should return start when the start position is declared', () => {
    const props = { start: true }
    const value = content(props)
    expect(value).toBe('start')
  })

  test('It should return center when the center position is declared', () => {
    const props = { center: true }
    const value = content(props)
    expect(value).toBe('center')
  })

  test('It should return and when the end position is declared', () => {
    const props = { end: true }
    const value = content(props)
    expect(value).toBe('end')
  })
})
