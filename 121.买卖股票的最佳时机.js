/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var sum = 0;
  var min = Number.MAX_VALUE;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      sum = Math.max(sum, prices[i] - min);
    }
  }
  return sum;
};
// @lc code=end
