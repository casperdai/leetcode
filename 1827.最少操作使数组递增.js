/*
 * @lc app=leetcode.cn id=1827 lang=javascript
 *
 * [1827] 最少操作使数组递增
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  var length = nums.length
  if (length < 2) {
    return 0
  }
  var count = 0
  var pre = nums[0]
  for (var i = 1; i < length; i++) {
    var diff = nums[i] - pre
    if (diff <= 0) {
      count += -diff + 1
      pre += 1
    } else {
      pre = nums[i]
    }
  }
  return count
};
// @lc code=end
