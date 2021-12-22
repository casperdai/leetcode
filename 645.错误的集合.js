/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  var target = 0
  for (var i = 0; i < nums.length; i++) {
    target = target ^ (i + 1) ^ nums[i]
  }
  var bit = target & ~(target - 1)
  var xor0 = 0
  var xor1 = 0
  for (var i = 0; i < nums.length; i++) {
    if ((i + 1) & bit) {
      xor0 ^= i + 1
    } else {
      xor1 ^= i + 1
    }
    if (nums[i] & bit) {
      xor0 ^= nums[i]
    } else {
      xor1 ^= nums[i]
    }
  }
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === xor0) {
      return [xor0, xor1]
    }
  }
  return [xor1, xor0]
};
// @lc code=end
