/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  var l = 0
  var r = nums.length - 1
  var result = []
  while (l <= r) {
    var a = nums[l] * nums[l]
    var b = nums[r] * nums[r]
    if (l === r || a >= b) {
      result.unshift(a)
      l += 1
    } else {
      result.unshift(b)
      r -= 1
    }
  }
  return result
};
// @lc code=end
