import Button from '@elements/button'
import h from '@standard/h'
import renderer from '@standard/renderer'

describe('@elements/button', () => {
  test('Deve criar um botao de cor padrao quand nenhuma cor for indicada', () => {
    const tree = renderer(
      <Button>Click Me</Button>
    )
    expect(tree).toMatchSnapshot()
  })

  test('Deve ciar um botao da cor correspondente quando indicado como propriedade', () => {
    const tree = renderer(
      <Button primary>Click Me</Button>
    )
    expect(tree).toMatchSnapshot()
  })
})
