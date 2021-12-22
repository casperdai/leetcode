/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  var x = 1
  var sum = 0
  while (n) {
    var diff = n % 10
    x *= diff
    sum += diff
    n = Math.floor(n / 10)
  }
  return x - sum
};
// @lc code=end
