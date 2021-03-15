/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  var count = 0
  var has = 0
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      has -= 1
    } else {
      has += 1
    }
    if (has === 0) {
      count += 1
    }
  }
  return Math.max(1, count)
};
// @lc code=end
