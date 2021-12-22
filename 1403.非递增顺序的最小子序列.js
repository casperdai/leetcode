/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  nums.sort((a, b) => a - b)
  var l = 0
  var r = nums.length - 1
  var result = []
  var lsum = 0
  var rsum = 0
  while (l < r) {
    if (rsum <= lsum) {
      rsum += nums[r]
      result.push(nums[r])
      r -= 1
    } else {
      lsum += nums[l]
      l += 1
    }
  }
  if (rsum > lsum + nums[l]) {
    return result
  }
  return result.concat(nums[l])
};
// @lc code=end
