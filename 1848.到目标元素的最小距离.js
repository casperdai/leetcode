/*
 * @lc app=leetcode.cn id=1848 lang=javascript
 *
 * [1848] 到目标元素的最小距离
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
  var result = Infinity
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result = Math.min(result, Math.abs(i - start))
      if (i >= start) {
        break
      }
    }
  }
  return result
};
// @lc code=end
