Portfolio.Post = DS.Model.extend
  title: DS.attr 'string'
  content: DS.attr 'string'

Portfolio.Post.FIXTURES = [
  {
    id: 1,
    title: 'First post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod mauris sed quam ultrices vel rhoncus nisi hendrerit. Morbi vel mauris diam. Ut in leo id purus semper euismod porta id justo.'
  }
  {
    id: 2,
    title: 'Second post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod mauris sed quam ultrices vel rhoncus nisi hendrerit. Morbi vel mauris diam. Ut in leo id purus semper euismod porta id justo.'
  }
]
