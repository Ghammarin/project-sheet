const airtable = require("airtable");

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyEmPlXlN7GLHT4d"
});

const base = airtable.base("appE7YBE4hzd7Ew1v");

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