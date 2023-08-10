import h from '@standard/h'
import renderer from '@standard/renderer'
import text from '@elements/text'

describe('@elements/text', () => {
  test('Should create an stack based on the tag name', () => {
    const tree = renderer(
      <text.Span>QCX</text.Span>
    )

    expect(tree).toMatchSnapshot()
  })
})
