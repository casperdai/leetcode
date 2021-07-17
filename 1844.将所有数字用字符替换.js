/*
 * @lc app=leetcode.cn id=1844 lang=javascript
 *
 * [1844] 将所有数字用字符替换
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
  var result = ''
  for (var i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      result += s[i]
    } else {
      result += String.fromCharCode(s.charCodeAt(i - 1) + Number(s[i]))
    }
  }
  return result
};
// @lc code=end
