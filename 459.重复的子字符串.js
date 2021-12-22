/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let index = 1
  let length = 0
  while (index <= s.length / 2) {
    if (length > 0 && index + length >= s.length) {
      return true
    }
    if (length === index) {
      var str = s.substring(0, length)
      if (s.length % str.length === 0) {
        var target = str
        while (target.length !== s.length) {
          target += str
        }
        if (target === s) {
          return true
        }
      }
      index += 1
      length = 0
    } else if (s[length] === s[index + length]) {
      length += 1
    } else {
      index += 1
      length = 0
    }
  }
  return false
};
// @lc code=end
