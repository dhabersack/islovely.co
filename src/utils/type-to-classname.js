const TYPE_TO_CLASSNAME = {
  listItem: 'font-size-16-medium m:font-size-18-medium',
  paragraph: 'font-size-16-medium margin-0 margin-bottom-s m:font-size-18-medium m:margin-bottom-m',
  strong: 'font-weight-600',
}

export default type => TYPE_TO_CLASSNAME[type]
