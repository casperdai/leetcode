/*
 * @lc app=leetcode.cn id=1758 lang=javascript
 *
 * [1758] 生成交替二进制字符串的最少操作数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  var count0 = 0
  var count1 = 0
  for (var i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === '0') {
        count1 += 1
      } else {
        count0 += 1
      }
    } else {
      if (s[i] === '0') {
        count0 += 1
      } else {
        count1 += 1
      }
    }
  }
  return Math.min(count0, count1)
};
// @lc code=end
