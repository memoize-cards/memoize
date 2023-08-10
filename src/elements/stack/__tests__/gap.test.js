import gap from '@elements/stack/gap'

describe('@elements/stack/gap', () => {
  test('It should return the variable of size xs when the size is not defined', () => {
    const props = {}
    const value = gap(props)
    expect(value).toBe('var(--spacing_inset-xs)')
  })

  test('It should return the variable of size quarck when the size is defined', () => {
    const props = { quarck: true }
    const value = gap(props)
    expect(value).toBe('var(--spacing_inset-quarck)')
  })

  test('It should return the variable of size nano when the size is defined', () => {
    const props = { nano: true }
    const value = gap(props)
    expect(value).toBe('var(--spacing_inset-nano)')
  })

  test('It should return the variable of size xs when the size is defined', () => {
    const props = { xs: true }
    const value = gap(props)
    expect(value).toBe('var(--spacing_inset-xs)')
  })

  test('It should return the variable of size sm when the size is defined', () => {
    const props = { sm: true }
    const value = gap(props)
    expect(value).toBe('var(--spacing_inset-sm)')
  })

  test('It should return the variable of size md when the size is defined', () => {
    const props = { md: true }
    const value = gap(props)
    expect(value).toBe('var(--spacing_inset-md)')
  })

  test('It should return the variable of size ld when the size is defined', () => {
    const props = { lg: true }
    const value = gap(props)
    expect(value).toBe('var(--spacing_inset-lg)')
  })

  test('It should return the variable of size huge when the size is defined', () => {
    const props = { huge: true }
    const value = gap(props)
    expect(value).toBe('var(--spacing_inset-huge)')
  })

  test('It should return the variable of size giant when the size is defined', () => {
    const props = { giant: true }
    const value = gap(props)
    expect(value).toBe('var(--spacing_inset-giant)')
  })
})
