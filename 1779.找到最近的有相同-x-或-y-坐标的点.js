/*
 * @lc app=leetcode.cn id=1779 lang=javascript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  var min = Infinity
  var curr = -1
  for (var i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      var abs = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
      if (abs < min) {
        min = abs
        curr = i
      }
    }
  }
  return curr
};
// @lc code=end
