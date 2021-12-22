/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  var area = 0
  for (var i = 0; i < points.length; i++) {
    for (var j = i + 1; j < points.length; j++) {
      for (var n = j + 1; n < points.length; n++) {
        var p1 = points[i]
        var p2 = points[j]
        var p3 = points[n]
        area = Math.max(area, Math.abs(p1[0] * p2[1] + p2[0] * p3[1] + p3[0] * p1[1] - p1[1] * p2[0] - p2[1] * p3[0] - p3[1] * p1[0]))
      }
    }
  }
  return area / 2
};
// @lc code=end
