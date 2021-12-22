/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  var rmap = {}
  var cmap = {}
  for (var i = 0; i < indices.length; i++) {
    if (rmap[indices[i][0]]) {
      rmap[indices[i][0]] += 1
    } else {
      rmap[indices[i][0]] = 1
    }

    if (cmap[indices[i][1]]) {
      cmap[indices[i][1]] += 1
    } else {
      cmap[indices[i][1]] = 1
    }
  }
  var count = 0
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (((rmap[i] || 0) + (cmap[j] || 0)) % 2 === 1) {
        count += 1
      }
    }
  }
  return count
};
// @lc code=end
