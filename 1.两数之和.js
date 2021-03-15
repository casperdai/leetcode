/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var cache = {};
  for (var i = 0; i < nums.length; i++) {
    var obj = nums[i];
    if (cache[obj] !== void 0) {
      return [cache[obj], i];
    }
    cache[target - obj] = i;
  }
};
// @lc code=end
