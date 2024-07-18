const Mustache = require("mustache");
Mustache.escape = text => text // don't escape anything
const fs = require("fs");

const data = require("./filter.json")
data.version = new Date().toISOString().split('T')[0]

// filter list
const promoTemplate = fs.readFileSync("filter.mustache", "utf8");
const promoResult = Mustache.render(promoTemplate, data)
fs.writeFileSync("filter.txt", promoResult, "utf8");

// cookie list
const cookieTemplate = fs.readFileSync("cookie.mustache", "utf8");
const cookieResult = Mustache.render(cookieTemplate, data)
fs.writeFileSync("cookie.txt", cookieResult, "utf8");