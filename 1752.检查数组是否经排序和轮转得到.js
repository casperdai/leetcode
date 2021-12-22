/*
 * @lc app=leetcode.cn id=1752 lang=javascript
 *
 * [1752] 检查数组是否经排序和轮转得到
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  var length = nums.length
  var count = nums[0] >= nums[length - 1] ? 0 : 1
  for (var i = 1; i < length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (count === 1) {
        return false
      }
      count += 1
    }
  }
  return true
};
// @lc code=end
