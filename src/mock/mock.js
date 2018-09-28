const homeNav=require("./homeNav.json");
const show=require("./sale_tag.json");
const sheChi=require("./sale_tag1.json");
const teHui=require("./sale_tag2.json");
const baiYuan=require("./sale_tag3.json");
const popular=require("./sale_tag4.json");
const buyer=require("./sale_tag5.json")
const chaoZhi=require("./sale_tag6.json")
const newZone=require("./sale_tag7.json")
const daily=require("./sale_tag8.json")
const bag=require("./bag.json")
const bagList=require("./sale_tag9.json")

module.exports = function() {
  return {
     homeNav,
     show,
     sheChi,
     teHui,
     baiYuan,
     popular,
     buyer,
     chaoZhi,
     newZone,
     daily,
     bag,
     bagList
  }
}
