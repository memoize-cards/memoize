import size from '@elements/text/size'

describe('@elements/text/size', () => {
  test('It should return the variable of size xs when the size is not defined', () => {
    const props = {}
    const value = size(props)
    expect(value).toBe('var(--font-size-xs)')
  })

  test('It should return the variable of size xxxs when the size is defined', () => {
    const props = { xxxs: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-xxxs)')
  })

  test('It should return the variable of size xxs when the size is defined', () => {
    const props = { xxs: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-xxs)')
  })

  test('It should return the variable of size xs when the size is defined', () => {
    const props = { xs: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-xs)')
  })

  test('It should return the variable of size sm when the size is defined', () => {
    const props = { sm: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-sm)')
  })

  test('It should return the variable of size md when the size is defined', () => {
    const props = { md: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-md)')
  })

  test('It should return the variable of size ld when the size is defined', () => {
    const props = { lg: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-lg)')
  })

  test('It should return the variable of size xl when the size is defined', () => {
    const props = { xl: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-xl)')
  })

  test('It should return the variable of size xxl when the size is defined', () => {
    const props = { xxl: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-xxl)')
  })

  test('It should return the variable of size xxxl when the size is defined', () => {
    const props = { xxxl: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-xxxl)')
  })

  test('It should return the variable of size display when the size is defined', () => {
    const props = { display: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-display)')
  })

  test('It should return the variable of size giant when the size is defined', () => {
    const props = { giant: true }
    const value = size(props)
    expect(value).toBe('var(--font-size-giant)')
  })
})
