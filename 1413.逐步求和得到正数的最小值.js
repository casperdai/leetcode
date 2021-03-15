/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  var min = 1
  var sum = 0
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (nums[i] < 0 && sum < 1) {
      min = Math.max(1 - sum, min)
    }
  }
  return min
};
// @lc code=end
