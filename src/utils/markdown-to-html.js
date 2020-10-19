import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

export default input => {
  const processed = unified().use(markdown).use(html).processSync(input)
  const asString = String(processed)
  const withoutTrailingNewline = asString.match('(.*)\n*$')[1]
  const withoutWrappingParagraphTags = withoutTrailingNewline.match('^(<p>)?(.*?)(</p>)?$')[2]

  return withoutWrappingParagraphTags
}
