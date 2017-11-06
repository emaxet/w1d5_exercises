function maxProfit(stockPrices) {
  var stockData = {};
  var potentialProfits = [];
  for (var i = 0; i < stockPrices.length; i++) {
    stockData[stockPrices[i]] = i;
  }
  for (var key in stockData) {
    for (var i = 0; i < stockPrices.length; i++) {
      if ((key - stockPrices[i]) > 0 && stockData[key] > i) {
        potentialProfits.push(key - stockPrices[i]);
      }
    }
  }
  potentialProfits.sort((a, b) => {
    return b - a;
  });
  console.log(potentialProfits[0]);
}

maxProfit([45, 24, 35, 31, 40, 38, 11]);