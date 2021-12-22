/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort(function (a, b) {
    return '' + a + b >= '' + b + a ? -1 : 1;
  });
  return nums[0] === 0 ? '0' : nums.join('');
};
// @lc code=end
