/*
 * @lc app=leetcode.cn id=1886 lang=javascript
 *
 * [1886] 判断矩阵经轮转后是否一致
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
  var n = mat.length
  r0: for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (mat[i][j] !== target[i][j]) {
        break r0
      }
    }
    if (i === n - 1) {
      return true
    }
  }

  r90: for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (mat[i][j] !== target[j][n - 1 - i]) {
        break r90
      }
    }
    if (i === n - 1) {
      return true
    }
  }

  r180: for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (mat[i][j] !== target[n - 1 - i][n - 1 - j]) {
        break r180
      }
    }
    if (i === n - 1) {
      return true
    }
  }

  r270: for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (mat[i][j] !== target[n - 1 - j][i]) {
        break r270
      }
    }
    if (i === n - 1) {
      return true
    }
  }

  return false
};
// @lc code=end
