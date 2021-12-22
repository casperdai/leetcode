/*
 * @lc app=leetcode.cn id=1337 lang=javascript
 *
 * [1337] 矩阵中战斗力最弱的 K 行
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  var result = []
  var map = {}
  for (var i = 0; i < mat[0].length; i++) {
    for (var j = 0; j < mat.length; j++) {
      if (!map[j] && mat[j][i] === 0) {
        map[j] = true
        k -= 1
        result.push(j)
        if (k === 0) {
          return result
        }
      }
    }
  }
  var index = 0
  while (k > 0) {
    if (!map[index]) {
      result.push(index)
      k -= 1
    }
    index += 1
  }
  return result
};
// @lc code=end
