/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  var count = 0
  var gap = 0
  var i = 0
  for (; i < nums.length; i++) {
    if (i && nums[i] <= nums[i - 1]) {
      count = Math.max(count, i - gap)
      gap = i
    }
  }
  return Math.max(count, i - gap)
};
// @lc code=end
