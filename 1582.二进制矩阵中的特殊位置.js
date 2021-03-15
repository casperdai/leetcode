/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  var rmap = {}
  var cmap = {}
  var count = 0
  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[0].length; j++) {
      if (mat[i][j]) {
        rmap[i] = (rmap[i] || 0) + 1
        cmap[j] = (cmap[j] || 0) + 1
      }
    }
  }
  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[0].length; j++) {
      if (mat[i][j] && rmap[i] === 1 && cmap[j] === 1) {
        count += 1
      }
    }
  }
  return count
};
// @lc code=end
