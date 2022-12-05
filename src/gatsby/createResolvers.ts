import { CreateResolversArgs } from 'gatsby'
import { createRemoteFileNode } from 'gatsby-source-filesystem'

export const createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
}: CreateResolversArgs): Promise<void> => {
  const { createNode } = actions

  await createResolvers({
    CMSData_directus_files: {
      file: {
        type: 'File',
        async resolve(source: { id: string; filename_download: string }) {
          const sourceUrl = `${process.env.DIRECTUS_URL}/assets/${source.id}?access_token=${process.env.DIRECTUS_TOKEN}`

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            cache,
            createNode,
            createNodeId,
            name: source.filename_download,
          })
        },
      },
    },
  })
}
