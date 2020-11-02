module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      },
    ],
    [
      'babel-preset-gatsby',
      {
        targets: {
          'browsers': [
            '>0.25%',
            'not dead'
          ]
        }
      },
    ],
  ],
}
