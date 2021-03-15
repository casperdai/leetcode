/*
 * @lc app=leetcode.cn id=1560 lang=javascript
 *
 * [1560] 圆形赛道上经过次数最多的扇区
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
  var result = []
  var start = rounds[0]
  var end = rounds[rounds.length - 1]
  if (end >= start) {
    for (var i = start; i <= end; i++) {
      result.push(i)
    }
  } else {
    for (var i = 1; i <= end; i++) {
      result.push(i)
    }
    for (var i = start; i <= n; i++) {
      result.push(i)
    }
  }
  return result
};
// @lc code=end
