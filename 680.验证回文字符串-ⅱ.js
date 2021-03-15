/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  var del = false
  var l = 0
  var r = s.length - 1
  var cache = null
  while (l < r) {
    if (s[l] === s[r]) {
      l += 1
      r -= 1
    } else {
      if (del) {
        if (cache) {
          l = cache[0]
          r = cache[1]
          cache = null
        } else {
          return false
        }
      } else {
        cache = [l, r - 1]
        l += 1
        del = true
      }
    }
  }
  return true
};
// @lc code=end
