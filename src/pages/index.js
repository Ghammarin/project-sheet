import React from "react"
import { Link, graphql } from "gatsby";
//(import Airtable from "airtable";)

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
  <h3>Aktuella projekt</h3>
  {data.allAirtable.edges.map((edge, i) => (
    <p><Link to={edge.node.data.PROJEKTNAMN} key={i} >
		{edge.node.data.projekt}
	</Link></p>
    )
	)
  }
  </Layout>
)


// query airtable for the Title and Path of each record,
// filtering for only records in the Sections table.
export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Projekt"}} sort:{fields: [STARTDATUM], order:DESC} ) {
      edges {
        node {
          data {
            projekt
			PROJEKTNAMN
          }
        }
      }
    }
  }
`


export default IndexPage
