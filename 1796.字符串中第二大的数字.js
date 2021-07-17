/*
 * @lc app=leetcode.cn id=1796 lang=javascript
 *
 * [1796] 字符串中第二大的数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  var pre = -1
  var curr = -1
  for (var i = 0; i < s.length; i++) {
    var code = s.charCodeAt(i)
    if (code >= 48 && code <= 57) {
      code -= 48
      if (pre === -1) {
        pre = code
      } else if (code > pre) {
        curr = pre
        pre = code
      } else if (code < pre && code > curr) {
        curr = code
      }
      if (curr === 8) {
        break
      }
    }
  }
  return curr
};
// @lc code=end
