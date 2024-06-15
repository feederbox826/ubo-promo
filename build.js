const Mustache = require("mustache");
Mustache.escape = text => text // don't escape anything
const fs = require("fs");
const template = fs.readFileSync("filter.mustache", "utf8");
const data = require("./filter.json")
data.version = new Date().toISOString().split('T')[0]
const result = Mustache.render(template, data)
fs.writeFileSync("filter.txt", result, "utf8");