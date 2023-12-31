import background from '@elements/tag/background'

describe('@elements/tag/background', () => {
  test('Deve criar uma variavel css com a cor correspondente a propriedade indicada', () => {
    const props = { primary: true }
    const cssVariable = background(props)
    expect(cssVariable).toBe('var(--color-primary)')
  })

  test('Deve criar uma variavel de cor fallback quando nenhuma cor for definido', () => {
    const props = {}
    const cssVariable = background(props)
    expect(cssVariable).toBe('transparent')
  })
})
