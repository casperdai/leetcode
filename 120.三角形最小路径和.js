/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  var count = triangle.length - 2;
  while (count >= 0) {
    var row = triangle[count];
    var preRow = triangle[count + 1];
    for (var i = 0; i < row.length; i++) {
      row[i] = Math.min(preRow[i], preRow[i + 1]) + row[i];
    }
    count -= 1;
  }
  return triangle[0][0];
};
// @lc code=end
