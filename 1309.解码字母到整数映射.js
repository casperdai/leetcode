/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  var result = ''
  var i = 0
  while (i < s.length) {
    if (s[i + 2] === '#') {
      result += String.fromCharCode(Number(s[i] + s[i + 1]) + 96)
      i += 3
    } else {
      result += String.fromCharCode(Number(s[i]) + 96)
      i += 1
    }
  }
  return result
};
// @lc code=end
