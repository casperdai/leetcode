/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  var sum = 0
  var row = grid.length
  var col = grid[0].length
  var j = col - 1
  count: for (var i = 0; i < row && j >= 0; i++) {
    for (; j >= 0; j--) {
      if (grid[i][j] >= 0) {
        sum += col - 1 - j
        continue count
      }
    }
    sum += col * (row - i)
  }
  return sum
};
// @lc code=end
