import align from '@elements/stack/align'

describe('@elements/stack/align', () => {
  test('It should return start when no position is declared', () => {
    const props = {}
    const value = align(props)
    expect(value).toBe('start')
  })

  test('It should return start when the top position is declared', () => {
    const props = { top: true }
    const value = align(props)
    expect(value).toBe('start')
  })

  test('It should return center when the middle position is declared', () => {
    const props = { middle: true }
    const value = align(props)
    expect(value).toBe('center')
  })

  test('It should return end when the bottom position is declared', () => {
    const props = { bottom: true }
    const value = align(props)
    expect(value).toBe('end')
  })
})
