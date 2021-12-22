/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b)
  if (nums[nums.length - 1] <= 0) {
    return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  }
  return nums[nums.length - 1] * Math.max(nums[0] * nums[1], nums[nums.length - 2] * nums[nums.length - 3])
};
// @lc code=end
