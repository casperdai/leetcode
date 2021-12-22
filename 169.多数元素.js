/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var target = null;
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (count === 0) {
      target = nums[i];
    }
    count += target === nums[i] ? 1 : -1;
  }
  return target;
};
// @lc code=end
