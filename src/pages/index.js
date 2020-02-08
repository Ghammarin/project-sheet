import React from "react"
import Layout from "../components/layout"

const airtable = require("airtable");

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyEmPlXlN7GLHT4d"
});

const base = airtable.base("appE7YBE4hzd7Ew1v");

const updateOrInsert = record => {
  const primaryField = record.experimentVariation;

  base("inventarieflik")
    .select({
      maxRecords: 1,
      view: "Grid view",
      filterByFormula: `{experimentVariation} = "${primaryField}"`,
    })
    .firstPage(function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(r) {
        console.log("Retrieved", r.get("experimentVariation"));
        replace(r.id, record);
      });

      if (!records.length) {
        console.log("empty");
        create(record);
      }
    });
};

module.exports = {
  updateOrInsert,
};


const IndexPage = ({ data }) => (
  <Layout>
  <h3>Aktuella projekt</h3>
  </Layout>
)


export default IndexPage
