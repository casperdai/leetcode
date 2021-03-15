/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    }
    map[nums[i]] = true;
  }
  return false;
};
// @lc code=end
