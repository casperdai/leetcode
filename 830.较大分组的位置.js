/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  var start = 0
  var result = []
  s += ' '
  for (var i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      if (i - start >= 3) {
        result.push([start, i - 1])
      }
      start = i
    }
  }
  return result
};
// @lc code=end
