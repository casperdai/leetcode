/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  var maxRow = nums.length
  var maxCol
  if (maxRow === 0 || maxRow * (maxCol = nums[0].length) !== r * c) {
    return nums
  }
  var result = []
  var row = 0
  var col = 0
  for (var i = 0; i < maxRow; i++) {
    for (var j = 0; j < maxCol; j++) {
      if (col === 0) {
        result[row] = []
      }
      result[row].push(nums[i][j])
      if (col === c - 1) {
        row += 1
        col = 0
      } else {
        col += 1
      }
    }
  }
  return result
};
// @lc code=end
