/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2) {
    return s
  }
  var group = numRows + numRows - 2
  var n = s.length
  var result = ''
  for (var i = 0; i < numRows; i++) {
    for (var j = i; j < n; j += group) {
      result += s[j]
      if (i > 0 && i < numRows - 1 && j + group - i - i < n) {
        var next = j + group - i - i
        if (next < n) {
          result += s[next]
        }
      }
    }
  }
  return result
};
// @lc code=end
