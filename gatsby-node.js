const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Query for all WordPress posts
  const postResult = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            id
            title
            uri
            slug
            content
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // Query for all WordPress categories
  const categoryResult = await graphql(`
    query {
      allWpCategory {
        edges {
          node {
            id
            name
            parentId
            uri
          }
        }
      }
    }
  `)

  if (postResult.errors || categoryResult.errors) {
    throw new Error(result.errors)
  }

  // Create a page for each WordPress post
  postResult.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: node.id,
      },
    })
  })

  // Create a page for each WordPress category
  // Create a page for each WordPress category
  categoryResult.data.allWpCategory.edges.forEach(({ node }) => {
    createPage({
      path: `/category/${node.uri}/`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        uri: node.uri,
      },
    })
  })
}
