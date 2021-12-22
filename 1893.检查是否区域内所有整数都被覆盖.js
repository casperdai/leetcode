/*
 * @lc app=leetcode.cn id=1893 lang=javascript
 *
 * [1893] 检查是否区域内所有整数都被覆盖
 */

// @lc code=start
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
  var map = Array(52).fill(0)
  for (var i = 0; i < ranges.length; i++) {
    map[ranges[i][0]] += 1
    map[ranges[i][1] + 1] -= 1
  }
  var has = 0
  for (var i = 1; i < map.length; i++) {
    has += map[i]
    if (i >= left && i <= right && has <= 0) {
      return false
    }
  }
  return true
};
// @lc code=end
