/*
 * @lc app=leetcode.cn id=1913 lang=javascript
 *
 * [1913] 两个数对之间的最大乘积差
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  nums.sort((a, b) => a - b)
  var length = nums.length
  return nums[length - 1] * nums[length - 2] - nums[0] * nums[1]
};
// @lc code=end
