/*
 * @lc app=leetcode.cn id=1822 lang=javascript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  var negative = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0
    }
    if (nums[i] < 0) {
      negative += 1
    }
  }
  return negative % 2 === 0 ? 1 : -1
};
// @lc code=end
