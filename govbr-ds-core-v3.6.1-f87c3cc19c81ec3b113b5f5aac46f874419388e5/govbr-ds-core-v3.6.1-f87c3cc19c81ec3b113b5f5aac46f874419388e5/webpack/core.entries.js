/**
 * core.entries define as entries da build do Webpack.
 */

const path = require('path')
const paths = require('./paths')
const fs = require('fs')
let production = false

const core = {
  core: [
    path.resolve(paths.srcSCSS, 'core.scss'),

    path.resolve(paths.srcUtil, 'dropdown', 'dropdown.scss'),
    path.resolve(paths.srcJSpartial, 'core.entry.js'),
  ],
  'core-base': [path.resolve(paths.srcSCSS, 'core-base.scss'), path.resolve(paths.srcJSpartial, 'globals-class.js')],
  'core-tokens': [path.resolve(paths.srcSCSS, 'core-tokens.scss')],
  'core-init': [path.resolve(paths.srcJSpartial, 'core-init.js')],
  'core-lite': [path.resolve(paths.srcSCSS, 'core-lite.scss'), path.resolve(paths.srcJSpartial, 'core.entry.js')],
  'core.min': [path.resolve(paths.srcJSpartial, 'core.entry.js')],
  'core-init.min': [path.resolve(paths.srcJSpartial, 'core-init.js')],
}

/**
 * Retorna o array com paths do componente
 */
function pathsEntry(componentName) {
  const listCompoenent = []
  const jsFile = path.resolve(paths.srcComponents, componentName, `${componentName}.js`)
  if (fs.existsSync(jsFile)) {
    listCompoenent.push(jsFile)
  }

  const cssFile = path.resolve(paths.srcComponents, componentName, `_${componentName}.scss`)
  if (fs.existsSync(cssFile)) {
    listCompoenent.push(cssFile)
  }
  const pugFile = path.resolve(paths.srcComponents, componentName, 'examples.pug')
  if (fs.existsSync(pugFile)) {
    listCompoenent.push(pugFile)
  }
  // Inserido examples json
  let jsonFile = path.resolve(paths.srcComponents, componentName, 'example1.json')

  if (fs.existsSync(jsonFile)) {
    listCompoenent.push(jsonFile)
  }
  jsonFile = path.resolve(paths.srcComponents, componentName, 'example2.json')

  if (fs.existsSync(jsonFile)) {
    listCompoenent.push(jsonFile)
  }

  return listCompoenent
}

/**
 * Retorna o array com paths do componente
 */
function pathsExamplePug(componentName, exampleArray) {
  const listCompoenent = []
  const jsFile = path.resolve(paths.srcComponents, componentName, `${componentName}.js`)
  if (fs.existsSync(jsFile)) {
    listCompoenent.push(jsFile)
  }

  const cssFile = path.resolve(paths.srcComponents, componentName, `_${componentName}.scss`)
  if (fs.existsSync(cssFile)) {
    listCompoenent.push(cssFile)
  }

  const pugFile = path.resolve(paths.srcComponents, componentName, 'examples.pug')
  if (fs.existsSync(pugFile)) {
    listCompoenent.push(pugFile)
  }
  exampleArray.forEach((examplename) => {
    const pugFileExample = path.resolve(paths.srcComponents, componentName, 'examples', `${examplename}.pug`)
    if (fs.existsSync(pugFileExample)) {
      listCompoenent.push(pugFileExample)
    }
  })
  return listCompoenent
}

function pathsExampleTemplates(componentName, exampleArray) {
  const listCompoenent = []

  const pugFile = path.resolve(paths.srcTemplates, componentName, `${componentName}.pug`)
  if (fs.existsSync(pugFile)) {
    listCompoenent.push(pugFile)
  }
  exampleArray.forEach((examplename) => {
    const pugFileExample = path.resolve(paths.srcTemplates, componentName, 'examples', `${examplename}.pug`)
    if (fs.existsSync(pugFileExample)) {
      listCompoenent.push(pugFileExample)
    }
  })
  return listCompoenent
}

function pathsEntryPages(pagesName) {
  const listCompoenent = []
  const jsFile = path.resolve(paths.srcPages, pagesName, `${pagesName}.js`)
  if (fs.existsSync(jsFile)) {
    listCompoenent.push(jsFile)
  }

  const cssFile = path.resolve(paths.srcPages, pagesName, `_${pagesName}.scss`)
  if (fs.existsSync(cssFile)) {
    listCompoenent.push(cssFile)
  }
  const pugFile = path.resolve(paths.srcPages, pagesName, 'examples.pug')
  if (fs.existsSync(pugFile)) {
    listCompoenent.push(pugFile)
  }

  let jsonFile = path.resolve(paths.srcPages, pagesName, 'example1.json')

  if (fs.existsSync(jsonFile)) {
    listCompoenent.push(jsonFile)
  }
  jsonFile = path.resolve(paths.srcPages, pagesName, 'example2.json')

  if (fs.existsSync(jsonFile)) {
    listCompoenent.push(jsonFile)
  }

  return listCompoenent
}

function pathsEntryTemplate(templateName) {
  const listCompoenent = []
  const jsFile = path.resolve(paths.srcTemplates, templateName, `${templateName}.js`)
  if (fs.existsSync(jsFile)) {
    listCompoenent.push(jsFile)
  }

  const cssFile = path.resolve(paths.srcTemplates, templateName, `_${templateName}.scss`)
  if (fs.existsSync(cssFile)) {
    listCompoenent.push(cssFile)
  }
  const pugFile = path.resolve(paths.srcTemplates, templateName, `${templateName}.pug`)
  if (fs.existsSync(pugFile)) {
    listCompoenent.push(pugFile)
  }

  return listCompoenent
}

function setComponent(name) {
  core[`components/${name}/${name}`] = pathsEntry(name)
}

function setPages(name) {
  core[`pages/${name}/${name}`] = pathsEntryPages(name)
}

function setUtil(name) {
  core[`utilities-js/${name}/${name}`] = pathsEntryPages(name)
}

function setTemplate(name) {
  // core.setAttribute('components/avatar/' + name, pathsEntry(name))
  core[`templates/${name}/${name}`] = pathsEntryTemplate(name)
}

function setTemplates(name, exemplos) {
  // core['components/' + name + '/' + name] = pathsEntry(name)
  core[`templates/${name}/${name}`] = pathsExampleTemplates(name, exemplos)
}

function setComponentPug(name, exemplos) {
  core[`components/${name}/${name}`] = pathsExamplePug(name, exemplos)
  if (production) {
    core[`components/${name}/${name}.min`] = pathsEntry(name, exemplos)
  }
}

/**
 * entries retorna o objeto entries necessário para a build do webpack.
 *
 * @returns {Object} Webpack entry object
 */
function entries(argv) {
  if (argv.mode === 'production') {
    production = true
  } else {
    production = false
  }

  setComponentPug('accordion', [
    'accordion-default-negative',
    'accordion-default',
    'accordion-single-negative',
    'accordion-single',
  ])

  setComponentPug('avatar', ['avatar-icon', 'avatar-image', 'avatar-letter', 'avatar-dropdown'])

  setComponentPug('breadcrumb', ['breadcrumb-default', 'breadcrumb-truncate'])

  setComponentPug('button', [
    'button-emphasys',
    'button-emphasys-dark-mode',
    'button-circle',
    'button-circle-dark-mode',
    'button-block',
    'button-block-dark-mode',
    'button-densities',
    'button-status',
  ])

  setComponentPug('card', ['card-examples', 'card-collapse', 'card-disabled', 'card-hover', 'card-scroll'])

  setComponentPug('carousel', [
    'carousel-padrao',
    'carousel-circular',
    'carousel-in',
    'carousel-hibw',
    'carousel-hibh',
    'carousel-text',
  ])

  setComponentPug('checkbox', [
    'checkbox-default',
    'checkbox-inline',
    'checkbox-states',
    'checkbox-indeterminate',
    'checkbox-no-label',
  ])

  setComponentPug('cookiebar', ['cookiebar-padrao'])

  setComponentPug('datetimepicker', [
    'datetimepicker-dateandtime',
    'datetimepicker-range',
    'datetimepicker-simple',
    'datetimepicker-time',
  ])

  setComponentPug('divider', [
    'divider',
    'divider-dark',
    'divider-dashed',
    'divider-dashed-dark',
    'divider-vertical',
    'divider-vertical-dashed',
    'divider-small',
    'divider-medium',
    'divider-large',
  ])

  setComponentPug('footer', ['footer-default', 'footer-inverted'])

  setComponentPug('header', ['header-compact', 'header-sizes', 'header'])

  setComponentPug('input', [
    'input-default',
    'input-sizes',
    'input-icons',
    'input-buttons',
    'input-inline',
    'input-highlight',
    'input-states',
  ])

  setComponentPug('item', ['item-disabled', 'item-elems-iteractive', 'item-selection-checkbox', 'item-selection-radio'])

  setComponentPug('list', [
    'list-dense-high',
    'list-dense-medium',
    'list-dense-small',
    'list-group-divider',
    'list-group-expansion',
    'list-group-tag',
    'list-horizontal-divider',
    'list-horizontal-expansion',
    'list-simples-selecionaveis',
    'list-vertical-simples',
  ])

  setComponentPug('loading', ['loading-md', 'loading-progress', 'loading-sml'])

  setComponentPug('menu', [
    'menu-principal-offcanvas',
    'menu-principal-push',
    'menu-contextual',
    'menu-groupedby',
    'menu-sizes',
  ])

  setComponentPug('message', ['feedback', 'message-inverted', 'message-padrao'])

  setComponentPug('modal', ['scrim-behavior', 'modal-alert', 'modal-loading', 'modal-terms'])

  setComponentPug('notification', ['notification-full'])

  setComponentPug('pagination', [
    'pagination-default',
    'pagination-ellipsis',
    'pagination-sizes',
    'pagination-contextual',
    'pagination-dark',
  ])

  setComponentPug('radio', ['radio-default', 'radio-inline', 'radio-states'])

  setComponentPug('scrim', ['scrim-default', 'scrim-legibilidade'])

  setComponentPug('select', ['select-multiplo', 'select-simples'])

  setComponentPug('magicbutton', [
    'magicbutton-text',
    'magicbutton-icon',
    'magicbutton-small',
    'magicbutton-medium',
    'magicbutton-large',
  ])

  setComponentPug('signin', [
    'signin-tipo1',
    'signin-tipo2',
    'signin-tipo2-image',
    'signin-primary-circle',
    'signin-primary',
    'signin-secondary',
    'signin-secondary-block',
    'signin-small',
    'signin-medium',
    'signin-large',
    'signin-primary-inverted',
    'signin-secondary-inverted',
    'signin-secondary-circle-inverted',
  ])

  setComponentPug('skiplink', ['skiplink-simple', 'skiplink-full'])

  setComponentPug('step', [
    'step-horizontal',
    'step-vertical',
    'step-alert',
    'step-icon',
    'step-void',
    'step-simple',
    'step-text',
  ])

  setComponentPug('switch', [
    'switch-default',
    'switch-disabled',
    'switch-icon',
    'switch-labels',
    'switch-alignments',
    'switch-density',
  ])

  setComponentPug('tab', ['tab-default', 'tab-count', 'tab-icons', 'tab-density', 'tab-inverted'])

  setComponentPug('table', ['table', 'table-irregular-1', 'table-irregular-2'])

  setComponentPug('tag', [
    'tag-density',
    'tag-count',
    'tag-icon',
    'tag-selections',
    'tag-interaction',
    'tag-status',
    'tag-text',
  ])

  setComponentPug('textarea', [
    'textarea-default',
    'textarea-sizes',
    'textarea-states',
    'textarea-label-left',
    'textarea-inverted',
    'textarea-counter',
    'textarea-counter-no-limit',
  ])

  setComponentPug('tooltip', [
    'tooltip-error-right',
    'tooltip-info-top',
    'tooltip-popover-icon-error',
    'tooltip-popover-icon-warning',
    'tooltip-popover-image',
    'tooltip-popover',
    'tooltip-success-left',
    'tooltip-warning-bottom-timer',
    'tooltip-warning-bottom',
  ])

  setComponentPug('upload', ['upload-disabled', 'upload-feedback', 'upload-multiple', 'upload-single'])

  setComponentPug('wizard', ['wizard-horizontal', 'wizard-vertical'])

  setTemplates('base', ['base-offcanvas', 'base-push', 'fluid-offcanvas', 'fluid-push'])

  setTemplate('erro')
  /**
   * webapck entry dos utilitarios
   */

  core['util/arredondamento/arredondamento'] = [path.resolve(paths.srcUtil, 'arredondamento', 'examples.pug')]

  core['util/bordas/bordas'] = [path.resolve(paths.srcUtil, 'bordas', 'examples.pug')]

  core['util/cores/cores'] = [path.resolve(paths.srcUtil, 'cores', 'examples.pug')]

  core['util/display/display'] = [path.resolve(paths.srcUtil, 'display', 'examples.pug')]

  core['util/elevacao/elevacao'] = [path.resolve(paths.srcUtil, 'elevacao', 'examples.pug')]

  core['util/espacamento/espacamento'] = [path.resolve(paths.srcUtil, 'espacamento', 'examples.pug')]

  core['util/flexbox/flexbox'] = [path.resolve(paths.srcUtil, 'flexbox', 'examples.pug')]

  core['util/grid/grid'] = [path.resolve(paths.srcUtil, 'grid', 'examples.pug')]

  core['util/movimento/movimento'] = [path.resolve(paths.srcUtil, 'movimento', 'examples.pug')]

  core['util/overflow/overflow'] = [path.resolve(paths.srcUtil, 'overflow', 'examples.pug')]

  core['util/textos/textos'] = [path.resolve(paths.srcUtil, 'textos', 'examples.pug')]

  core['util/tipografia/tipografia'] = [path.resolve(paths.srcUtil, 'tipografia', 'examples.pug')]

  core['util/accordion/accordion'] = [
    path.resolve(paths.srcUtil, 'accordion', 'examples.pug'),
    path.resolve(paths.srcUtil, 'accordion', 'examples', 'accordion-behavior.pug'),
  ]

  core['util/checkgroup/checkgroup'] = [
    path.resolve(paths.srcUtil, 'checkgroup', 'examples.pug'),
    path.resolve(paths.srcUtil, 'checkgroup', 'examples', 'checkgroup-behavior.pug'),
    path.resolve(paths.srcUtil, 'checkgroup', 'examples', 'checkgroup-behavior-chain.pug'),
  ]

  core['util/collapse/collapse'] = [
    path.resolve(paths.srcUtil, 'collapse', 'examples.pug'),
    path.resolve(paths.srcUtil, 'collapse', 'examples', 'collapse-behavior.pug'),
  ]

  core['util/dropdown/dropdown'] = [
    path.resolve(paths.srcUtil, 'dropdown', 'examples.pug'),
    path.resolve(paths.srcUtil, 'dropdown', 'examples', 'dropdown-behavior.pug'),
  ]

  core['util/scrim/scrim'] = [
    path.resolve(paths.srcUtil, 'scrim', 'examples.pug'),
    path.resolve(paths.srcUtil, 'scrim', 'examples', 'scrim-behavior.pug'),
  ]

  core['util/tooltip/tooltip'] = [
    path.resolve(paths.srcUtil, 'tooltip', 'examples.pug'),
    path.resolve(paths.srcUtil, 'tooltip', 'examples', 'tooltip-behavior.pug'),
    path.resolve(paths.srcUtil, 'tooltip', 'examples', 'tooltip-simples.pug'),
  ]

  core['partial/js/behavior/accordion'] = [path.resolve(paths.srcJSUtilbehavior, 'accordion.js')]
  core['partial/js/behavior/collapse'] = [path.resolve(paths.srcJSUtilbehavior, 'collapse.js')]

  core['partial/js/behavior/checkgroup'] = [path.resolve(paths.srcJSUtilbehavior, 'checkgroup.js')]

  core['partial/js/behavior/dropdown'] = [path.resolve(paths.srcJSUtilbehavior, 'dropdown.js')]
  core['partial/js/behavior/scrim'] = [path.resolve(paths.srcJSUtilbehavior, 'scrim.js')]
  core['partial/js/behavior/tooltip'] = [path.resolve(paths.srcJSUtilbehavior, 'tooltip.js')]

  core['components/cookiebar/cookiebar-data'] = [path.resolve(paths.srcComponents, 'cookiebar', `cookiebar-data.js`)]
  core['components/cookiebar/cookiebar-labels'] = [
    path.resolve(paths.srcComponents, 'cookiebar', `cookiebar-labels.js`),
  ]
  core['components/cookiebar/cookiebar-templates'] = [
    path.resolve(paths.srcComponents, 'cookiebar', `cookiebar-templates.js`),
  ]
  core['components/cookiebar/jsonData'] = [path.resolve(paths.srcComponents, 'cookiebar', `jsonData.js`)]
  core['components/cookiebar/selectors'] = [path.resolve(paths.srcComponents, 'cookiebar', `selectors.js`)]

  return core
}

module.exports = {
  entries,
}
