/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  if (k === 1) {
    return s
  }
  var result = ''
  var cache = ''
  var reverse = false
  for (var i = 0; i < s.length; i++) {
    var diff = i % k
    if (diff === 0) {
      result += cache
      cache = ''
      reverse = !reverse
    }
    if (reverse) {
      cache = s[i] + cache
    } else {
      cache += s[i]
    }
  }
  return result + cache
};
// @lc code=end
