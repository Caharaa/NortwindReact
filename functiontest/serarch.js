const orders = require("./mockdata.js");
const obj = require("./dict.js");

function lowersearch(keyword,orders){
  const lowercaseKey = keyword.toLowerCase();
  const result = orders.filter(item => item.shipCountry.toLowerCase().includes(lowercaseKey)
  );
  return result
}
function bothendsearch(keyword,orders){
  let start = 0;
  let end = orders.length-1;
  const result = new Array();
  while(start < end){
    if(orders[start].shipCountry.toLowerCase() === keyword.toLowerCase()){
      result.push(orders[start]);
    }
    if(orders[end].shipCountry.toLowerCase() === keyword.toLowerCase()){
      result.push(orders[end]);
    }
    start += 1;
    end -=1;
  }
  return result;
}

const result1 = bothendsearch("Thailand",orders);
const result2 = lowersearch("Thailand",orders);
console.log(`algor 1 ${result1.length} algor 2 ${result2.length}`);
const cash = new obj();
cash.set("1264","hellow world!");
console.log(cash.get("1264"));