/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let minPrice1 = Infinity;
    let minPrice2 = Infinity;

    // Find the two cheapest chocolates
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice1) {
            minPrice2 = minPrice1;
            minPrice1 = prices[i];
        } else if (prices[i] < minPrice2) {
            minPrice2 = prices[i];
        }
    }

    // Check if we can afford both chocolates
    if (minPrice1 + minPrice2 > money) {
        return money;
    } else {
        return money - (minPrice1 + minPrice2);
    }
};