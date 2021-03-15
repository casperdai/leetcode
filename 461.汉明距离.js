/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  var n = x ^ y
  var count = 0
  while (n) {
    if (n % 2 === 1) {
      count += 1
    }
    n = n >> 1
  }
  return count
};
// @lc code=end
