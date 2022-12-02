import { CreatePagesArgs } from 'gatsby'
import path from 'path'

const HOME_PAGE_TEMPLATE = path.resolve('src/templates/HomePage/index.tsx')

export const createPages = async ({
  actions,
  reporter,
}: CreatePagesArgs): Promise<void> => {
  actions.createPage({
    path: '/',
    component: HOME_PAGE_TEMPLATE,
  })

  reporter.info(`Created Home`)
}
