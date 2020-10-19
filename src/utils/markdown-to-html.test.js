import markdownToHTML from './markdown-to-html'

describe('markdownToHtml', () => {
  it('transforms heading', () => {
    expect(markdownToHTML('# Heading')).toBe('<h1>Heading</h1>')
  })

  it('transforms code', () => {
    expect(markdownToHTML('There is some `code in here`.')).toBe('There is some <code>code in here</code>.')
  })

  it('transforms bold', () => {
    expect(markdownToHTML('That is a **bold statement** you’re making.')).toBe('That is a <strong>bold statement</strong> you’re making.')
  })

  it('transforms italics', () => {
    expect(markdownToHTML('When _in_ Rome')).toBe('When <em>in</em> Rome')
  })
})
