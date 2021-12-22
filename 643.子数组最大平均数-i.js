/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  var sum = 0
  for (var i = 0; i < k; i++) {
    sum += nums[i]
  }
  var diff = 0
  for (var i = k; i < nums.length; i++) {
    diff += nums[i] - nums[i - k]
    if (diff > 0) {
      sum += diff
      diff = 0
    }
  }
  return sum / k
};
// @lc code=end
