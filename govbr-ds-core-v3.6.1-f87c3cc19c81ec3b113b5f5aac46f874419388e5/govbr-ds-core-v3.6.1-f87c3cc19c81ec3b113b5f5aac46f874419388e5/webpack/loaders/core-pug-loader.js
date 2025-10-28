/**
 * Loader webpack síncrono para resolução de módulos pug para o core.
 *
 * @see https://webpack.js.org/concepts/#loaders
 * @see https://webpack.js.org/concepts/loaders/
 * @see https://webpack.js.org/api/loaders/
 */
const pug = require('pug')

// OBS.: loader-utils will be incorporated in webpack 5.
// After it's release, change the way this works
const loaderUtils = require('loader-utils')
const validateOptions = require('schema-utils')
const schema = require('./options.schema.json')

const loaderName = 'core-pug-loader'

/**
 * Loader function.
 *
 * @param {string} pugTemplate Pug Template for compilation with pug
 */
function corePugLoader(pugTemplate) {
  const options = loaderUtils.getOptions(this)

  validateOptions(schema, options, {
    name: loaderName,
    baseDataPath: 'options',
  })

  const compilerOptions = {
    ...options.compilerOptions,
    filename: this.resourcePath,
  }
  const render = pug.compile(pugTemplate, compilerOptions)

  // Incremental compilation needs this
  // https://webpack.js.org/contribute/writing-a-loader/#loader-dependencies
  for (const dependencyFile of render.dependencies) {
    this.addDependency(dependencyFile)
  }

  const html = render(options.locals)

  if (options.outputType === 'html') {
    return html
  }
  // return `module.exports = ${JSON.stringify(html)};`
  return ''
}

module.exports = corePugLoader
