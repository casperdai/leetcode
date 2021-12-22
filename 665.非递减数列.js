/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  var change = false
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (change) {
        return false
      } else {
        change = true
        if (i === 0 || nums[i - 1] <= nums[i + 1]) {
          nums[i] = nums[i + 1]
        } else {
          nums[i + 1] = nums[i]
        }
      }
    }
    pre = nums[i]
  }
  return true
};
// @lc code=end
