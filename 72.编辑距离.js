/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  var arr = [];
  var m = word1.length;
  var n = word2.length;
  for (var i = 0; i <= m; i++) {
    arr[i] = [];
    for (var j = 0; j <= n; j++) {
      if (i === 0) {
        arr[i][j] = j;
      } else if (j === 0) {
        arr[i][j] = i;
      } else {
        arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1], arr[i - 1][j - 1]) + 1;
        if (word1[i - 1] === word2[j - 1]) {
          arr[i][j] = Math.min(arr[i][j], arr[i - 1][j - 1])
        }
      }
    }
  }
  return arr[m][n];
};
// @lc code=end
