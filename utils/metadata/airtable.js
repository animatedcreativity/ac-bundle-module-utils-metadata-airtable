exports = module.exports = exports = module.exports = function() {
  var mod = {
    table: async function(base, table) {
      var {record, error} = await app.api.airtable.requestMetadata("record", function(json, page) {}, "Structure", "Grid view", [], "GET", "&filterByFormula=" + app.utils.url.encode("IF(AND(Base=\"" + base + "\", Table=\"" + table + "\"), 1, 0)"));
      if (app.has(record) && record.records.length > 0) {
        return JSON.parse(record.records[0].fields.Metadata);
      }
    }
  };
  return mod;
}