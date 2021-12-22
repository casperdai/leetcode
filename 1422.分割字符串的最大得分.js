/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  var count0 = s[0] === '0' ? 1 : 0
  var count1 = 0
  for (var i = 1; i < s.length; i++) {
    if (s[i] === '1') {
      count1 += 1
    }
  }
  var max = count0 + count1
  for (var i = 1; i < s.length - 1; i++) {
    if (s[i] === '0') {
      count0 += 1
    } else {
      count1 -= 1
    }
    max = Math.max(count0 + count1, max)
  }
  return max
};
// @lc code=end
