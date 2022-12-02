const createPages = require('./src/gatsby/createPages').createPages
const onCreateWebpackConfig =
  require('./src/gatsby/onCreateWebpackConfig').onCreateWebpackConfig

exports.createPages = createPages
exports.onCreateWebpackConfig = onCreateWebpackConfig
