/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  nums.sort((a, b) => b - a)
  for (var x = 1; x <= nums.length; x++) {
    if (nums[x - 1] >= x && (x === nums.length || nums[x] < x)) {
      return x
    }
  }
  return -1
};
// @lc code=end
