/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var result = ''
  var cache = ''
  for (var i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      result += cache + ' '
      cache = ''
    } else {
      cache = s[i] + cache
    }
  }
  return result + cache
};
// @lc code=end
