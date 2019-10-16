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

class Contact extends React.component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit = e => {
    const fields = {"fields": {"Kommentar": this.state.kommentar, "Notes": this.state.notes}}
    fetch("https://api.airtable.com/v0/appVntpV9Sejz9kjg/Projekt", {
      method: "PATCH",
      headers: {"Authorization": `Bearer ${process.env.AIRTABLE_API}`,
                "Content-Type": "application/json"},
      body: JSON.stringify(fields)
    })
    .then(() => alert("Form Sent!"))
    .catch(error => alert(error))

    e.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.kommentar]: e.target.value})

  render() {
    return() (
      <form>
        <label>
          Skriv kommentar
          <input type="text" name="kommentar" onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}


// query airtable for the Title and Path of each record,
// filtering for only records in the Sections table.
export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Projekt"}} sort:{fields: [data___STARTDATUM], order:ASC} ) {
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
