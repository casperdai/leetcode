/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  var arr = []
  var maxRow = M.length
  var maxCol = M[0].length
  for (var i = 0; i < maxRow; i++) {
    arr[i] = []
    for (var j = 0; j < maxCol; j++) {
      var sum = 0
      var count = 0
      for (var r = Math.max(0, i - 1); r < Math.min(maxRow, i + 2); r++) {
        for (var c = Math.max(0, j - 1); c < Math.min(maxCol, j + 2); c++) {
          sum += M[r][c]
          count += 1
        }
      }
      arr[i][j] = Math.floor(sum / count)
    }
  }
  return arr
};
// @lc code=end
