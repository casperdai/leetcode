/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  var result = []
  for (var i = 0; i < A[0].length; i++) {
    result[i] = []
    for (var j = 0; j < A.length; j++) {
      result[i][j] = A[j][i]
    }
  }
  return result
};
// @lc code=end
