import border from '@elements/tag/border'

describe('@elements/tag/border', () => {
  test('Deve criar uma variavel css da cor correspondente a propriedade indicada', () => {
    const props = { primary: true }
    const cssVariable = border(props)
    expect(cssVariable).toBe('var(--color-primary)')
  })

  test('Deve criar uma variavel css da cor master quando nenhuma propriedade de cor for indicada', () => {
    const props = {}
    const cssVariable = border(props)
    expect(cssVariable).toBe('var(--color-master-dark)')
  })
})
