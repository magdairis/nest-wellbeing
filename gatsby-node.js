/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({
  actions: { createTypes, createFieldExtension },
  createContentDigest,
}) => {
  createFieldExtension({
    name: 'mdx',
    extend() {
      return {
        type: 'String',
        resolve(source, args, context, info) {
          // Grab field
          const value = source[info.fieldName]
          // Isolate MDX
          const mdxType = info.schema.getType('Mdx')
          // Grab just the body contents of what MDX generates
          const { resolve } = mdxType.getFields().body

          return resolve({
            rawBody: value,
            internal: {
              contentDigest: createContentDigest(value), // Used for caching
            },
          })
        },
      }
    },
  })

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      items: [ItemValues]
    }

    type ItemValues {
      value: String @mdx
    }
  `)
}
