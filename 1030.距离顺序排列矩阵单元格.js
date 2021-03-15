/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  function dist (r1, c1) {
    return Math.abs(r1 - r0) + Math.abs(c1 - c0)
  }
  var result = []
  for (var i = 0; i < R; i++) {
    for (var j = 0; j < C; j++) {
      var val = dist(i, j)
      if (!result[val]) {
        result[val] = []
      }
      result[val].push([i, j])
    }
  }
  return [].concat(...result)
};
// @lc code=end
