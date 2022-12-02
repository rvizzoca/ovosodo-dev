import { CreateWebpackConfigArgs } from 'gatsby'
import path from 'path'

export const onCreateWebpackConfig = ({
  stage,
  actions,
  getConfig,
}: CreateWebpackConfigArgs): void => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        app: path.resolve(__dirname, '..'),
      },
    },
  })

  if (stage === 'build-javascript' || stage === 'develop') {
    const config = getConfig()

    const miniCssExtractPlugin = config.plugins.find(
      (plugin: any) => plugin.constructor.name === 'MiniCssExtractPlugin',
    )

    if (miniCssExtractPlugin) miniCssExtractPlugin.options.ignoreOrder = true

    actions.replaceWebpackConfig(config)
  }
}
