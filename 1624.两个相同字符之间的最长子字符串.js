/*
 * @lc app=leetcode.cn id=1624 lang=javascript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  var map = {}
  var max = -1
  for (var i = 0; i < s.length; i++) {
    if (map[s[i]] === void 0) {
      map[s[i]] = i
    } else {
      max = Math.max(max, i - map[s[i]] - 1)
    }
  }
  return max
};
// @lc code=end
