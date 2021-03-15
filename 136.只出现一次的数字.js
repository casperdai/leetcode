/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var target = 0;
  for (var i = 0; i < nums.length; i++) {
    target = target ^ nums[i];
  }
  return target;
};
// @lc code=end
