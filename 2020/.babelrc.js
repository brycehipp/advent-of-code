module.exports = {
  presets: [['@babel/preset-env', { modules: false }]],
  env: {
    test: {
      plugins: [
        'babel-plugin-rewire',
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
  },
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
}
