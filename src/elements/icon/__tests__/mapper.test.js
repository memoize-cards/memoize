import mapper from '@elements/icon/mapper'

jest.mock('@elements/icon/media/caretLeft.svg', () => '/url-mock-caret-left.svg')
jest.mock('@elements/icon/media/caretRight.svg', () => '/url-mock-caret-right.svg')
jest.mock('@elements/icon/media/live.svg', () => '/url-mock-live.svg')
jest.mock('@elements/icon/media/trendUp.svg', () => '/url-mock-trend-up.svg')

describe('@elements/icon', () => {
  test('should return the CaretLeft icon for the corresponding tag name', () => {
    const url = mapper('CaretLeft')
    expect(url).toBe('/url-mock-caret-left.svg')
  })

  test('should return the CaretRith icon for the corresponding tag name', () => {
    const url = mapper('CaretRight')
    expect(url).toBe('/url-mock-caret-right.svg')
  })

  test('should return the Live icon for the corresponding tag name', () => {
    const url = mapper('Live')
    expect(url).toBe('/url-mock-live.svg')
  })

  test('should return the TrendUp icon for the corresponding tag name', () => {
    const url = mapper('TrendUp')
    expect(url).toBe('/url-mock-trend-up.svg')
  })
})
