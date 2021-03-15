/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var count = 0;
  var d = 5;
  while (d <= n) {
    count += Math.floor(n / d);
    d *= 5;
  }
  return count;
};
// @lc code=end
