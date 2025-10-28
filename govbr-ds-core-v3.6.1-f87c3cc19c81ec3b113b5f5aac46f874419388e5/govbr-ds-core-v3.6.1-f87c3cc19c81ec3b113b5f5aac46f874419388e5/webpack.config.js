const path = require('path')

// Webpack Stuff
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

// GOVBR-DS Build Stuff
const paths = require('./webpack/paths')
const { plugins } = require('./webpack/core.plugins')
const { entries } = require('./webpack/core.entries')

// Configuração webpack
const webpackConfig = (_env, argv) => {
  return {
    target: 'web',
    externals: [
      // /@popperjs/,
    ],
    entry: entries(argv),
    output: {
      filename: '[name].js',
      path: paths.dist,
      library: 'core',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    resolve: {
      alias: {
        '@': paths.src,
      },
    },
    module: {
      rules: [
        {
          test: /(?<!core)((?<!min))\.s[ac]ss$/i,
          include: paths.src,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  // Prefer `dart-sass (sass)`
                  // implementation: require("sass"),
                  includePaths: [paths.srcComponents],
                  outputStyle: 'expanded',
                },
                additionalData: '@use "sass:math";\n @import "../../partial/scss/base";\n ',
              },
            },
          ],
        },
        {
          test: /\.json$/,
          loader: 'file-loader',
          type: 'javascript/auto',
          options: {
            name: '[name].json',
            outputPath: (filename, absoluteSourceModuleFilePath, rootPath) => {
              const relativePath = path.relative(rootPath, absoluteSourceModuleFilePath)
              const outPath = relativePath.split(path.sep)
              outPath.shift() // src
              return outPath.join(path.sep)
            },
          },
        },
        {
          test: /(core)\.s[ac]ss$/i,
          include: paths.src,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [paths.srcSCSS, paths.srcComponents],
                  outputStyle: 'expanded',
                },
              },
            },
          ],
        },
        {
          // Include pug-loader to process the pug files
          test: /\.pug$/,
          include: paths.src,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].html',
                esModule: false,

                // Mantém a estrutura de diretórios (mas excluindo-se o 'src/pug/views')
                outputPath: (filename, absoluteSourceModuleFilePath, rootPath) => {
                  const relativePath = path.relative(rootPath, absoluteSourceModuleFilePath)
                  const outPath = relativePath.split(path.sep)
                  let isExample = false
                  let nameExample = ''
                  let nameComponent = ''
                  // Remove as três primeiras partes do path, ou seja, 'src', 'pug' e 'views'
                  let typeComp = ''
                  typeComp = outPath[1]
                  nameComponent = outPath[2]

                  if (outPath[3] === 'examples') {
                    isExample = true
                    nameExample = outPath[4]
                    outPath.shift()
                  }
                  outPath.shift() // src
                  outPath.shift() // pug
                  outPath.shift() // views
                  outPath.pop() // [name].pug
                  outPath.push(typeComp)
                  outPath.push(nameComponent)
                  // [name].html
                  if (isExample) {
                    outPath.push('examples')
                    outPath.push(nameExample.replace('.pug', '.html'))
                  } else {
                    outPath.push(filename.replace(/-example/g, ''))
                  }

                  console.debug(`HTML gerado: ${outPath.join(path.sep)}\n`)
                  return outPath.join(path.sep)
                },
              },
            },
            {
              loader: path.resolve(paths.webpackLoaders, 'core-pug-loader.js'),
              options: {
                // Se esse loader for usado com o file-loader, utilize 'html'.
                // Caso seja usado pelo html-webpack-plugin, utilize 'commonjs'.
                outputType: 'html',
                compilerOptions: {
                  pretty: true,
                },
                locals: {
                  version: '../',
                  cdnUrl: '../../',
                },
              },
            },
          ],
        },
      ],
    },
    plugins: plugins(argv),
    optimization: {
      concatenateModules: true,
      moduleIds: 'named',
      // runtimeChunk: 'multiple',
      // splitChunks: {
      //   chunks: "all",
      //   // cacheGroups: {
      //   //   "vendors-popperjs": {
      //   //     test: /@popperjs/,
      //   //     name: "vendors/popperjs",
      //   //     chunks: "all",
      //   //   },
      //   //   "vendors-flatpickr": {
      //   //     test: /flatpickr/,
      //   //     name: "vendors/flatpicker",
      //   //     chunks: "all",
      //   //   },
      //   // },
      // },
      minimizer: [
        new TerserPlugin({
          include: /\.min\.js$/,
          parallel: true,
          terserOptions: {
            module: true,
            mangle: true,
            output: {
              comments: false,
            },
            compress: {
              inline: 1,
              unused: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    devtool: 'source-map',
  }
}

module.exports = webpackConfig
