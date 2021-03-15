/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  var m = 1;
  while (true) {
    if (m === n) {
      return true;
    }
    if (m > n) {
      return false;
    }
    m *= 2;
  }
};
// @lc code=end
