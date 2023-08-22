import content from '@elements/stack/content'

describe('@elements/stack/content', () => {
  test('It should return left when no position is declared', () => {
    const props = {}
    const value = content(props)
    expect(value).toBe('start')
  })

  test('It should return left when the start position is declared', () => {
    const props = { left: true }
    const value = content(props)
    expect(value).toBe('start')
  })

  test('It should return center when the center position is declared', () => {
    const props = { center: true }
    const value = content(props)
    expect(value).toBe('center')
  })

  test('It should return and when the right position is declared', () => {
    const props = { right: true }
    const value = content(props)
    expect(value).toBe('end')
  })
})
