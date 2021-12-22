/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  var count = 1
  var max = 0
  for (var i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count += 1
    } else {
      max = Math.max(max, count)
      count = 1
    }
  }
  return Math.max(max, count)
};
// @lc code=end
