/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  var n = distance.length
  var r = 0
  var l = 0
  var curr = start
  while (curr !== destination) {
    r += distance[curr]
    curr = (curr + 1) % n
  }
  while (curr !== start) {
    l += distance[curr]
    curr = (curr + 1) % n
  }
  return Math.min(r, l)
};
// @lc code=end
