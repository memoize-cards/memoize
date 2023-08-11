import color from '@elements/button/color'

describe('@elements/button/color', () => {
  test('Deve criar a variavel de core branca quando uma cor for indicada', () => {
    const props = { primary: true }
    const cssVariable = color(props)
    expect(cssVariable).toBe('var(--color-pure-white)')
  })

  test('Deve criar uma variavel de cor master quando nenhuma cor for indicada', () => {
    const props = {}
    const cssVariable = color(props)
    expect(cssVariable).toBe('var(--color-master)')
  })
})
