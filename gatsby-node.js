const createPages = require('./src/gatsby/createPages').createPages
const createResolvers = require('./src/gatsby/createResolvers').createResolvers
const onCreateWebpackConfig =
  require('./src/gatsby/onCreateWebpackConfig').onCreateWebpackConfig

exports.createPages = createPages
exports.createResolvers = createResolvers
exports.onCreateWebpackConfig = onCreateWebpackConfig
