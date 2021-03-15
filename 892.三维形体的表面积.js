/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  var sum = 0
  var length = grid.length
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      if (grid[i][j] > 0) {
        sum += 2
      }
      if (i === 0) {
        sum += grid[i][j]
      }
      if (i === length - 1) {
        sum += grid[i][j]
      }
      if (i >= 1) {
        sum += Math.abs(grid[i][j] - grid[i - 1][j])
      }
      if (j === 0) {
        sum += grid[i][j]
      }
      if (j === length - 1) {
        sum += grid[i][j]
      }
      if (j >= 1) {
        sum += Math.abs(grid[i][j] - grid[i][j - 1])
      }
    }
  }
  return sum
};
// @lc code=end
