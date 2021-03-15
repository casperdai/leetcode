/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  var row = matrix.length
  var col = matrix[0].length
  for (var i = 1; i < row; i++) {
    for (var j = 1; j < col; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false
      }
    }
  }
  return true
};
// @lc code=end
