import Tag from '@elements/tag'
import h from '@standard/h'
import renderer from '@standard/renderer'

describe('@elements/tag', () => {
  test('Deve criar uma tag de cor padrao quando nenhuma cor for indicada', async () => {
    const tree = await renderer(
      <Tag>Click Me</Tag>
    )
    expect(tree).toMatchSnapshot()
  })

  test('Deve ciar uma tag da cor correspondente quando indicado como propriedade', async () => {
    const tree = await renderer(
      <Tag primary>Click Me</Tag>
    )
    expect(tree).toMatchSnapshot()
  })
})
