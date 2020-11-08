import mergeClassnames from './merge-classnames'

describe('mergeClassnames', () => {
  it('concatenates lists if there is no overlap', () => {
    expect(mergeClassnames('font-size-12-medium', 'font-weight-400')).toBe('font-size-12-medium font-weight-400')
  })

  it('does not concatenate anything if second list is undefined', () => {
    expect(mergeClassnames(`
      flex
      align-items-center
    `)).toBe('flex align-items-center')
  })

  it('overrides font-size in first parameter with later declaration', () => {
    expect(mergeClassnames(`
      font-size-16-medium
      mb-12
    `, 'font-size-14-medium')).toBe('mb-12 font-size-14-medium')
  })

  it('removes duplicates', () => {
    expect(mergeClassnames('m-0', 'm-0')).toBe('m-0')
  })

  it('removes breakpoint-declarations in base if override contains non-breakpoint version', () => {
    expect(mergeClassnames(`
      mb-24
      m:mb-48
      xl:mb-96
    `, 'mb-12')).toBe('mb-12')
  })

  it('removes all margins in base classnames if `m-0` is set in overrides', () => {
    expect(mergeClassnames(`
      mx-15
      my-24
      mb-48
      mt-60
      ml-5
      mr-25
    `, 'm-0')).toBe('m-0')
  })
})
