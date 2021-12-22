/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num < 1) {
    return false;
  }
  return /^10{0,}$/.test(num.toString(4));
};
// @lc code=end
