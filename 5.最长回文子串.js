/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var n = s.length
  if (n < 2) {
    return s
  }
  if (n === 2) {
    return s[0] === s[1] ? s : s[0]
  }
  var max = 0
  var result = ''
  var maxR = n
  for (var i = 0; i < maxR; i++) {
    var l = i - 1
    var r = i + 1
    while (l >= 0 && r < n && s[l] === s[r]) {
      l -= 1
      r += 1
    }
    if (r - l - 1 > max) {
      max = r - l - 1
      result = s.slice(l + 1, r)
      maxR = n - Math.floor(max / 2)
    }
    if (s[i] === s[i + 1]) {
      l = i - 1
      r = i + 2
      while (l >= 0 && r < n && s[l] === s[r]) {
        l -= 1
        r += 1
      }
      if (r - l - 1 > max) {
        max = r - l - 1
        result = s.slice(l + 1, r)
        maxR = n - Math.floor(max / 2)
      }
    }
  }
  return result
};
// @lc code=end
