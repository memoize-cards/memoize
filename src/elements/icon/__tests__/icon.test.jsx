import h from '@standard/h'
import icon from '@elements/icon'
import mapper from '@elements/icon/mapper'
import renderer from '@standard/renderer'

jest.mock('@elements/icon/mapper', () => jest.fn().mockReturnValue('/url-mock.svg'))
jest.mock('@elements/icon/style', () => ({ icon: 'class-name-mock' }))

describe('@elements/icon', () => {
  beforeEach(() => {
    mapper.mockClear()
  })

  test('Should create an icon based on the tag name', () => {
    const tree = renderer(
      <icon.QCX />
    )

    expect(tree).toMatchSnapshot()
    expect(mapper).toHaveBeenCalledTimes(1)
    expect(mapper).toHaveBeenCalledWith('QCX')
  })

  test('Should pass the className to the icon', () => {
    const tree = renderer(
      <icon.QCX className='custom-class-name' />
    )

    expect(tree).toMatchSnapshot()
    expect(mapper).toHaveBeenCalledTimes(1)
    expect(mapper).toHaveBeenCalledWith('QCX')
  })
})
