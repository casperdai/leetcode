/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  var line = 1
  var sum = 0
  for (var i = 0; i < S.length; i++) {
    var width = widths[S.charCodeAt(i) - 97]
    if (sum + width > 100) {
      line += 1
      sum = width
    } else {
      sum += width
    }
  }
  return [line, sum]
};
// @lc code=end
