/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n === 0) {
    return 0
  }
  if (n <= 2) {
    return 1
  }
  var a = 0
  var b = 1
  var c = 1
  var N = 3
  while (N <= n) {
    [a, b, c] = [b, c, a + b + c]
    N += 1
  }
  return c
};
// @lc code=end
