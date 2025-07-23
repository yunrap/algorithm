/**
 * @param {number[]} prices
 * @return {number}
 */

// 가장싼날을 찾기
// maxProfit = 가장싼날 이후의 가격 - 가장싼날

var maxProfit = function (prices: Array<number>) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(prices[i] - minPrice, maxProfit);
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
