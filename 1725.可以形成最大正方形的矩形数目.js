/*
 * @lc app=leetcode.cn id=1725 lang=javascript
 *
 * [1725] 可以形成最大正方形的矩形数目
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
  var max = 0
  var count = 0
  for (var i = 0; i < rectangles.length; i++) {
    var curr = Math.min(rectangles[i][0], rectangles[i][1])
    if (curr > max) {
      max = curr
      count = 1
    } else if (curr === max) {
      count += 1
    }
  }
  return count
};
// @lc code=end
