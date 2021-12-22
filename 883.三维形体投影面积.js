/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  var sum = 0
  var length = grid.length
  for (var i = 0; i < length; i++) {
    var maxR = 0
    var maxC = 0
    for (var j = 0; j < length; j++) {
      if (grid[i][j] > 0) {
        sum += 1
      }
      maxR = Math.max(maxR, grid[i][j])
      maxC = Math.max(maxC, grid[j][i])
    }
    sum += maxR + maxC
  }
  return sum
};
// @lc code=end
