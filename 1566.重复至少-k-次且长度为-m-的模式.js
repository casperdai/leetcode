/*
 * @lc app=leetcode.cn id=1566 lang=javascript
 *
 * [1566] 重复至少 K 次且长度为 M 的模式
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
  var n = arr.length
  if (n < m * k) {
    return false
  }
  search: for (var i = 0; i <= n - m * k; i += 1) {
    for (var j = 0; j < m; j++) {
      for (var l = 1; l < k; l++) {
        if (arr[i + j] !== arr[i + j + l * m]) {
          continue search
        }
      }
    }
    return true
  }
  return false
};
// @lc code=end
