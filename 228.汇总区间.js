/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  var result = [];
  var left = 0;
  var index = 0;
  var len = nums.length;
  while (index < len) {
    if (index + 1 < len && nums[index + 1] - nums[index] === 1) {
      index += 1;
    } else {
      if (left === index) {
        result.push(nums[left] + '');
      } else {
        result.push(nums[left] + '->' + nums[index]);
      }
      index += 1;
      left = index;
    }
  }
  return result;
};
// @lc code=end
