/**
 * Módulo Paths.
 * Exporta diretórios comuns de uso geral pela build do projeto.
 */

const path = require('path')

// Diretório corrente.
// A intenção desta variável é obter o diretório da raiz do projeto.
// Não importe ou execute este módulo caso não esteja no diretório raiz do projeto.
const projectRootDir = process.cwd()

const paths = {
  src: path.resolve(projectRootDir, 'src'),
  srcJS: path.resolve(projectRootDir, 'src', 'js'),
  srcJSpartial: path.resolve(projectRootDir, 'src', 'partial', 'js'),
  srcJSComponents: path.resolve(projectRootDir, 'src', 'js', 'components'),
  srcJSUtilbehavior: path.resolve(projectRootDir, 'src', 'partial', 'js', 'behavior'),
  srcComponents: path.resolve(projectRootDir, 'src', 'components'),
  srcTemplates: path.resolve(projectRootDir, 'src', 'templates'),
  srcPages: path.resolve(projectRootDir, 'src', 'pages'),
  srcPartial: path.resolve(projectRootDir, 'src', 'partial'),
  srcUtil: path.resolve(projectRootDir, 'src', 'util'),
  srcPugViews: path.resolve(projectRootDir, 'src', 'pug', 'views'),
  srcPugViewsComponents: path.resolve(projectRootDir, 'src', 'pug', 'views', 'components'),
  srcPugViewsTemplates: path.resolve(projectRootDir, 'src', 'pug', 'views', 'templates'),
  srcSCSS: path.resolve(projectRootDir, 'src', 'partial', 'scss'),
  srcSCSSComponents: path.resolve(projectRootDir, 'src', 'scss', 'components'),
  dist: path.resolve(projectRootDir, 'dist'),
  webpackLoaders: path.resolve(projectRootDir, 'webpack', 'loaders'),
}

module.exports = paths
