/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  // createPage is a built in action,
  // available to all gatsby-node exports
  const { createPage } = actions
  return new Promise(async resolve => {
    // we need the table name (e.g. "Sections")
    // as well as the unique path for each Page/Section.
    const result = await graphql(`
      {
        allAirtable(filter: {table: {eq: "Projekt"}}){
          edges {
            node {
              table
              data {
                PROJEKTNAMN
              }
            }
          }
        }
      }
    `)
    // For each path, create page and choose a template.
    // values in context Object are available in that page's query
    result.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: node.data.PROJEKTNAMN,
        component: path.resolve(`./src/templates/page-template.js`),
        context: {
          Path: node.data.PROJEKTNAMN,
        },
      })
    })
    resolve()
  })
}
