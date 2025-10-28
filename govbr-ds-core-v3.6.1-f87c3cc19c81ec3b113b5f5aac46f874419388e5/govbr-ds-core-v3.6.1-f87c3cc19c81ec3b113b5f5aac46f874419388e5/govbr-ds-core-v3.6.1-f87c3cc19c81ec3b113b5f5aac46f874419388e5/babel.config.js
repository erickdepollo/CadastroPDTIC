const presets = [
  [
    '@babel/env',
    {
      targets: {
        chrome: '67',
        edge: '17',
        firefox: '60',
        safari: '11.1',
      },
      // useBuiltIns: "usage"
    },
  ],
]

module.exports = { presets }
