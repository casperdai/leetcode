/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  var max = 0
  var next = 0
  for (var i = 0; i < gain.length; i++) {
    next += gain[i]
    max = Math.max(max, next)
  }
  return max
};
// @lc code=end
