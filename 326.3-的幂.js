/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n < 1) {
    return false;
  }
  return /^10{0,}$/.test(n.toString(3));
};
// @lc code=end
