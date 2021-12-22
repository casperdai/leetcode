/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  var mid = Math.sqrt(area)
  var left = Math.floor(mid)
  var right = left
  while (left >= 1 && right <= area) {
    var target = left * right
    if (target === area) {
      return [right, left]
    }
    if (target < area) {
      right += 1
    } else {
      left -= 1
    }
  }
  return [area, 1]
};
// @lc code=end
