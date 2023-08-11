import border from '@elements/button/border'

describe('@elements/button/border', () => {
  test('Deve criar uma variavel css da cor correspondente a propriedade indicada', () => {
    const props = { primary: true }
    const cssVariable = border(props)
    expect(cssVariable).toBe('var(--color-primary)')
  })

  test('Deve criar uma variavel css da cor master quando nenhuma propriedade de cor for indicada', () => {
    const props = {}
    const cssVariable = border(props)
    expect(cssVariable).toBe('var(--color-master)')
  })
})
