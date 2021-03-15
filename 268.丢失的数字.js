/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var miss = nums.length;
  for (var i = 0; i < nums.length; i++) {
    miss = miss ^ i ^ nums[i];
  }
  return miss;
};
// @lc code=end
