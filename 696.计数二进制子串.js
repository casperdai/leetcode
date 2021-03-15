/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  if (s.length < 2) {
    return 0
  }
  var total = 0
  var pre = 0
  var i = 0
  while (i < s.length) {
    var temp = s[i]
    var count = 0
    while (i < s.length && s[i] === temp) {
      count += 1
      i += 1
    }
    total += Math.min(pre, count)
    pre = count
  }
  return total
};
// @lc code=end
