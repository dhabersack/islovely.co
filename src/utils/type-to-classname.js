const TYPE_TO_CLASSNAME = {
  h1: `
    font-size-24-short
    font-weight-700
    margin-0
    margin-bottom-s
    margin-top-m
    xs:font-size-30-short
    l:font-size-36-short
    l:margin-bottom-m
    l:margin-top-l
  `,
  h2: `
    font-size-20-short
    font-weight-700
    margin-0
    margin-bottom-s
    margin-top-m
    xs:font-size-24-short
    l:font-size-30-short
    l:margin-bottom-m
  `,
  link: `
    color-blue-500
    no-decoration
    focus:outline
    hover:underline
    visited:color-blue-500
  `,
  listItem: `
    font-size-16-medium
    m:font-size-18-medium
  `,
  paragraph: `
    font-size-16-medium
    margin-0
    margin-bottom-s
    m:font-size-18-medium
    m:margin-bottom-m
  `,
  strong: `
    font-weight-600
  `,
}

export default type => `background-color-green-200 ${TYPE_TO_CLASSNAME[type]}`
