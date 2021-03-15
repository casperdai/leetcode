/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  if (s.length === 0) {
    return 0
  }
  var l = 0
  var r = s.length - 1
  while (l < r) {
    if (s[l] !== s[r]) {
      return 2
    }
    l += 1
    r -= 1
  }
  return 1
};
// @lc code=end
