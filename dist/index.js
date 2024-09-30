
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./xtring-sdk.cjs.production.min.js')
} else {
  module.exports = require('./xtring-sdk.cjs.development.js')
}
