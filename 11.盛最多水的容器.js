/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var left = 0;
  var right = height.length - 1;
  var max = 0;
  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    if (height[left] <= height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return max;
};
// @lc code=end
