import h from '@standard/h'
import renderer from '@standard/renderer'
import stack from '@elements/stack'

describe('@elements/stack', () => {
  test('Should create an stack based on the tag name', async () => {
    const tree = await renderer(
      <stack.Div />
    )
    expect(tree).toMatchSnapshot()
  })
})
