/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let buyingPrice = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > buyingPrice) {
      maxProfit += prices[i] - buyingPrice;
      buyingPrice = prices[i];
    } else {
      buyingPrice = Math.min(buyingPrice, prices[i]);
    }
  }
  
  return maxProfit;
};