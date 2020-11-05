const PREFIXES = [
  'color-',
  'font-size-',
  'font-weight-',
  'margin-bottom-',
  'margin-top-',
  'visited:color-'
]

const FULL_OVERRIDES = {
  'margin-0': 'margin-',
}

const hasElementThatStartsWith = (array, prefix) => array.some(element => element.startsWith(prefix))
const getPrefixAtBreakpointsRegExp = prefix => new RegExp(`^((xxs|xs|s|m|l|xl|xxl):)?${prefix}`)
const multilineToSinglelineString = string => string.split(/\n/).join('').replace(/ +/g, ' ').trim()

export default (base, overrides) => {
  const baseClassnames = multilineToSinglelineString(base).split(' ')
  const overrideClassnames = multilineToSinglelineString(overrides ?? '').split(' ')

  const baseClassnamesWithoutFullOverrides = baseClassnames.filter(classname => {
    return Object.entries(FULL_OVERRIDES).reduce((override, [key, prefix]) => {
      return override && !(overrideClassnames.includes(key) && getPrefixAtBreakpointsRegExp(prefix).test(classname))
    }, true)
  })

  const baseClassnamesWithoutPartialOverrides = baseClassnamesWithoutFullOverrides.filter(classname => {
    const prefix = PREFIXES.find(prefix => getPrefixAtBreakpointsRegExp(prefix).test(classname))

    return !prefix || !hasElementThatStartsWith(overrideClassnames, prefix)
  })

  return [
    ...new Set([
      ...baseClassnamesWithoutPartialOverrides,
      ...overrideClassnames
    ])
  ].join(' ').trim()
}
