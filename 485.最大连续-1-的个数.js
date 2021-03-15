/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var count = 0
  var max = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1
    } else {
      max = Math.max(max, count)
      count = 0
    }
  }
  return Math.max(max, count)
};
// @lc code=end
