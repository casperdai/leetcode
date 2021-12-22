/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  var s = ''
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      s += String.fromCharCode(str.charCodeAt(i) + 32)
    } else {
      s += str[i]
    }
  }
  return s
};
// @lc code=end
