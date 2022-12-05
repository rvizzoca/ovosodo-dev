import fs from 'fs'
// @ts-ignore
import GatsbyParser from 'gatsby/dist/query/file-parser'
import path from 'path'
import { promisify } from 'util'

/**
 * Collect all graphql queries from a directory
 * https://github.com/gatsbyjs/gatsby/discussions/12155
 * @param dirname
 * @returns {Promise<*>}
 */
export const collectGQLQueries = async (dirname: any) => {
  const parser = new GatsbyParser()
  const files = await promisify(fs.readdir)(dirname)
  const result = await parser.parseFiles(
    files.map((file) => path.join(dirname, file)),
  )
  return result
    .filter((item: any) => item.doc && item.doc.kind === 'Document')
    .map((doc: any) => doc.text)
    .join('\n')
}
