/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  var count = 0
  var gap = -1
  var s = n.toString(2)
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      if (gap !== -1) {
        count = Math.max(count, i - gap)
      }
      gap = i
    }
  }
  return count
};
// @lc code=end
