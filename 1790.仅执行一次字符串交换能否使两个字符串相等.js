/*
 * @lc app=leetcode.cn id=1790 lang=javascript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  if (s1 === s2) {
    return true
  }
  var change = false
  var pre = null
  for (var i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (change) {
        return false
      }
      if (pre) {
        if (pre[0] !== s2[i] || pre[1] !== s1[i]) {
          return false
        }
        change = true
        pre = null
      } else {
        pre = [s1[i], s2[i]]
      }
    }
  }
  return pre == null
};
// @lc code=end
