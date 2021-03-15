/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var sum = 0;
  var buy;
  var i = 0;
  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    buy = prices[i];
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    sum += prices[i] - buy;
  }
  return sum;
};
// @lc code=end
