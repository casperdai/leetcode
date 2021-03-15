/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b)
  var result = []
  var n = nums.length
  for (var i = 0; i < n - 3; i++) {
    if (nums[i] >= 0 && nums[i] > target) {
      return result
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (var j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      if (nums[j] >= 0 && nums[j] > target - nums[i]) {
        break
      }
      var diff = target - nums[i] - nums[j]
      var l = j + 1
      if (nums[l] >= 0 && nums[l] > diff) {
        break
      }
      var r = n - 1
      while (l < r) {
        var sum = nums[l] + nums[r]
        if (sum > diff) {
          r -= 1
          while (l < r && nums[r] === nums[r + 1]) {
            r -= 1
          }
        } else {
          if (sum === diff) {
            result.push([nums[i], nums[j], nums[l], nums[r]])
          }
          l += 1
          while (l < r && nums[l] === nums[l - 1]) {
            l += 1
          }
        }
      }
    }
  }
  return result
};
// @lc code=end
