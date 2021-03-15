/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var pre = null;
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== pre) {
      nums[count] = nums[i];
      count += 1;
      pre = nums[i];
    }
  }
  nums.length = count;
  return count;
};
// @lc code=end
