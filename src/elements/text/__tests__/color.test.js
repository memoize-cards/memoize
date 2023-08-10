import color from '@elements/text/color'

describe('@elements/text/color', () => {
  test('It should return black when no color is declared', () => {
    const props = {}
    const value = color(props)
    expect(value).toBe('var(--color-master)')
  })

  test('It should return color and modifier when the color is declared', () => {
    const props = { master: true, dark: true }
    const value = color(props)
    expect(value).toBe('var(--color-master-dark)')
  })
})
