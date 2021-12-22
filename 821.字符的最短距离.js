/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  var gap = -1
  var result = []
  for (var i = 0; i < S.length; i++) {
    if (S[i] === C) {
      for (var j = i; j >= gap + 1; j--) {
        if (gap === -1) {
          result[j] = i - j
        } else {
          result[j] = Math.min(i - j, j - gap)
        }
      }
      gap = i
    }
  }
  if (gap >= 0 && gap < S.length - 1) {
    for (var j = S.length - 1; j >= gap + 1; j--) {
      result[j] = j - gap
    }
  }
  return result
};
// @lc code=end
