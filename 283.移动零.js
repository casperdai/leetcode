/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var slow = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== slow) {
        [nums[slow], nums[i]] = [nums[i], nums[slow]];
      }
      slow += 1;
    }
  }
};
// @lc code=end
