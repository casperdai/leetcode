/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  var rmin = []
  var cmax = []
  for (var i = 0; i < matrix.length; i++) {
    rmin[i] = Math.min(...matrix[i])
    for (var j = 0; j < matrix[0].length; j++) {
      cmax[j] = Math.max(cmax[j] || 0, matrix[i][j])
    }
  }
  var result = []
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === rmin[i] && matrix[i][j] === cmax[j]) {
        result.push(matrix[i][j])
      }
    }
  }
  return result
};
// @lc code=end
