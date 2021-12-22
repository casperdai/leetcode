/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0 || x === 1) {
    return 1;
  }
  if (x === 0) {
    if (n > 0) {
      return 0;
    }
    return Infinity;
  }
  var diff = n > 0;
  var result = 1;
  n = Math.abs(n);
  if (n === -1) {
    return n & 1 === 1 ? -1 : 1;
  }
  while (n) {
    if (n & 1 === 1) {
      result *= x;
    }
    if (n === 1) {
      break;
    }
    x *= x;
    n = n >>> 1;
  }
  return diff ? result : 1 / result;
};
// @lc code=end
