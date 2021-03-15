/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  nums.sort((a, b) => a - b)
  var n = nums.length - 1
  return (nums[n] - 1) * (nums[n - 1] - 1)
};
// @lc code=end
