/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换酒问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  var sum = 0
  var diff = 0
  while (numBottles) {
    sum += numBottles
    diff += numBottles
    numBottles = Math.floor(diff / numExchange)
    diff %= numExchange
  }
  return sum
};
// @lc code=end
