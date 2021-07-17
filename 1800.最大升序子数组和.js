/*
 * @lc app=leetcode.cn id=1800 lang=javascript
 *
 * [1800] 最大升序子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  var max = nums[0]
  var curr = max
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      curr += nums[i]
    } else {
      max = Math.max(max, curr)
      curr = nums[i]
    }
  }
  return Math.max(max, curr)
};
// @lc code=end
