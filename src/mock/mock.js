const classData = require('./classData.json');
const brand = require('./brand.json')
const my = require("./my.json")
const tag = require("./tag.json")
module.exports = function() {
  return {
    classData,
    brand,
    my,
    tag
  }
}