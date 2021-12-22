/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  var map = {
    a: 0, b: 0, l: 0, o: 0, n: 0
  }
  for (var i = 0; i < text.length; i++) {
    map[text[i]] += 1
  }
  return Math.min(map.a, map.b, map.n, Math.floor(map.l / 2), Math.floor(map.o / 2))
};
// @lc code=end
