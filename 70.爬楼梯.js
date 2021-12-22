/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  var pre = 1;
  var i = 2;
  var sum = 2;
  while (i < n) {
    [pre, sum] = [sum, pre + sum];
    i += 1;
  }
  return sum;
};
// @lc code=end
