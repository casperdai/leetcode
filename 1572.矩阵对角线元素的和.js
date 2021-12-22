/*
 * @lc app=leetcode.cn id=1572 lang=javascript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  var n = mat.length - 1
  var sum = 0
  for (var i = 0; i <= n; i++) {
    sum += mat[i][i] + mat[n - i][i]
  }
  if (n % 2 === 0) {
    var mid = n / 2
    sum -= mat[mid][mid]
  }
  return sum
};
// @lc code=end
