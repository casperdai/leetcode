/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var count = 0
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count += 4
        if (i > 0 && grid[i - 1][j] === 1) {
          count -= 2
        }
        if (grid[i][j - 1] === 1) {
          count -= 2
        }
      }
    }
  }
  return count
};
// @lc code=end
