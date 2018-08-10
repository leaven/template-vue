'use strict'
const path = require('path')
module.exports = {
  'entry': {
    app: path.resolve('./src/main.js')
  },
  //https://github.com/vuejs-templates/webpack/issues/215
  // to avoid vue warning: You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
  'resolve': {
    'alias': {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}