/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  var diff = n % 2
  n = n >> 1
  while (n) {
    if (diff === n % 2) {
      return false
    }
    diff = 1 - diff
    n = n >> 1
  }
  return true
};
// @lc code=end
