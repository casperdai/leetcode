/*
 * @lc app=leetcode.cn id=1652 lang=javascript
 *
 * [1652] 拆炸弹
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  var n = code.length
  var result = []
  for (var i = 0; i < code.length; i++) {
    if (k === 0) {
      result[i] = 0
    } else if (k > 0) {
      var r = 0
      for (var j = 1; j <= k; j++) {
        r += code[(i + j) % n]
      }
      result[i] = r
    } else {
      var r = 0
      for (var j = 1; j <= -k; j++) {
        r += code[(i - j + n) % n]
      }
      result[i] = r
    }
  }
  return result
};
// @lc code=end
