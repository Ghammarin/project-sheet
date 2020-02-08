import React from "react"
import Layout from "../components/layout"

const airtable = require("airtable");

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyEmPlXlN7GLHT4d"
});

const base = airtable.base("appE7YBE4hzd7Ew1v");

function updateRecord(base) {
	console.log(test14)
  base("inventarieflik").create({ produkt: "Gabriella", test: "Hejhejhej" }, function(
  err,
  record
) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
});
document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}


const IndexPage = ({ data }) => (
  <Layout>
  <h3>Aktuella projekt</h3>
  <button id="demo" onclick="updateRecord(base)">Click me</button>
  </Layout>
)


export default IndexPage
