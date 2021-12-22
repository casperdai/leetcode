/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  var n = nums.length
  var best = null
  var diff
  for (var i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    var l = i + 1
    var r = n - 1
    while (l < r) {
      var sum = nums[i] + nums[l] + nums[r]
      if (best === null || Math.abs(sum - target) < diff) {
        best = sum
        diff = Math.abs(sum - target)
      }
      if (sum === target) {
        return target
      }
      if (sum > target) {
        r -= 1
        while (l < r && nums[r] === nums[r + 1]) {
          r -= 1
        }
      } else {
        l += 1
        while (l < r && nums[l] === nums[l - 1]) {
          l += 1
        }
      }
    }
  }
  return best
};
// @lc code=end
