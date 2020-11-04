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
      margin-s
    `, 'font-size-14-medium')).toBe('margin-s font-size-14-medium')
  })

  it('removes duplicates', () => {
    expect(mergeClassnames('margin-0', 'margin-0')).toBe('margin-0')
  })

  it('removes breakpoint-declarations in base if override contains non-breakpoint version', () => {
    expect(mergeClassnames(`
      margin-bottom-m
      m:margin-bottom-l
      xl:margin-bottom-xxl
    `, 'margin-bottom-s')).toBe('margin-bottom-s')
  })

  it('removes all margins in base classnames if `margin-0` is set in overrides', () => {
    expect(mergeClassnames(`
      margin-m
      margin-horizontal-s
      margin-vertical-m
      margin-bottom-l
      margin-top-xl
      margin-left-xxs
      margin-right-l
    `, 'margin-0')).toBe('margin-0')
  })
})
