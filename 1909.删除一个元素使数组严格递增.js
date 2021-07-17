/*
 * @lc app=leetcode.cn id=1909 lang=javascript
 *
 * [1909] 删除一个元素使数组严格递增
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
  function check (pre, start, preset) {
    for (; start < nums.length; start++) {
      if (nums[start] <= pre) {
        return false
      }
      pre = nums[start]
    }
    return true
  }

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      return check(nums[i - 1], i + 1) || (i < 2 || nums[i] > nums[i - 2]) && check(nums[i], i + 1)
    }
  }
  return true
};
// @lc code=end
