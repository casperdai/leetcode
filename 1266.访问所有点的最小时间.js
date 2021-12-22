/*
 * @lc app=leetcode.cn id=1266 lang=javascript
 *
 * [1266] 访问所有点的最小时间
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  var time = 0
  for (var i = 1; i < points.length; i++) {
    var x = Math.abs(points[i][0] - points[i - 1][0])
    var y = Math.abs(points[i][1] - points[i - 1][1])
    time += Math.min(x, y) + Math.abs(x - y)
  }
  return time
};
// @lc code=end
