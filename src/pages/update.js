import React from "react"
import { Link, graphql } from "gatsby";
//(import Airtable from "airtable";)

import Layout from "../components/layout"

const UpdatePage = ({ data }) => (
  <Layout>
  <h3>Uppdatera</h3>
  
	  {data.allAirtable.edges.map((edge, i) => (
	  <select>
		<option value="{edge.node.data.PROJEKTNAMN}key={i}">{edge.node.data.PROJEKTNAMN}key={i}</option>
	  
	</select>
    )
	)
  }
  </Layout>
)


var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_API_KEY'}).base('appVntpV9Sejz9kjg');

base('Projekt').update([
  {
    "id": "recTFZx3LLSpBcyD9",
    "fields": {
      "STARTDATUM": "2019-09-27",
      "SLUTDATUM": "2019-09-27",
      "Projektansvarig": [
        "recaB7R0V41pZYciY"
      ],
      "KUND": [
        "recBMaeaca90M5tC1"
      ],
      "KONTAKTPERSON": [
        "recBgtdTuqzbGqlAv"
      ],
      "PROJEKTNAMN": "Avoliteskurs",
      "STATUS": "Pågående",
      "Bokat": [
        "recd3WekxN36GLOsd"
      ],
      "Personalbokning": [
        "recVVo3qMDQIkz5Wr"
      ],
      "Plats": [
        "rec5dfVL7GBEq2tym"
      ]
    }
  },
  {
    "id": "recFsQtq04Sc6WIiD",
    "fields": {
      "STARTDATUM": "2019-10-01",
      "SLUTDATUM": "2019-10-02",
      "Projektansvarig": [
        "recl2i3aasbdKlwMl"
      ],
      "KUND": [
        "recPcBOLWz7kfBp73"
      ],
      "KONTAKTPERSON": [
        "rec1U4Wyhl6KqzKpX"
      ],
      "PROJEKTNAMN": "Monterbygge åt DemoLive",
      "ANTECKNINGAR": "Nathalie rigg 10-15\nArne rigg 10-?\nRiv ?",
      "STATUS": "Behöver faktureringsinfo",
      "Personalbokning": [
        "recQoCE6V4UhpKGIq",
        "rec1oHJrowfFMGrfp"
      ],
      "Plats": [
        "recu5oemwTaXJl5Vk"
      ]
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function(record) {
    console.log(record.get('STARTDATUM'));
  });
});


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
export default UpdatePage