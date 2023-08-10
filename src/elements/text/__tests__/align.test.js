import align from '@elements/text/align'

describe('@elements/text/align', () => {
  test('It should return inherit when no position is declared', () => {
    const props = {}
    const value = align(props)
    expect(value).toBe('inherit')
  })

  test('It should return left when the left position is declared', () => {
    const props = { left: true }
    const value = align(props)
    expect(value).toBe('left')
  })

  test('It should return center when the center position is declared', () => {
    const props = { center: true }
    const value = align(props)
    expect(value).toBe('center')
  })

  test('It should return right when the right position is declared', () => {
    const props = { right: true }
    const value = align(props)
    expect(value).toBe('right')
  })
})
