/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  var r = grid.length
  var c = grid[0].length
  k %= r * c
  if (k === 0) {
    return grid
  }
  grid = [].concat(...grid)
  grid = grid.slice(-k).concat(grid.slice(0, -k))
  var result = []
  var index = 0
  for (var i = 0; i < r; i++) {
    result[i] = []
    for (var j = 0; j < c; j++) {
      result[i].push(grid[index++])
    }
  }
  return result
};
// @lc code=end
