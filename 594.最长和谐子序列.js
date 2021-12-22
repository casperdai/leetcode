/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  var map = {}
  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = {
        count: 1,
        min: nums[i] - 1,
        max: nums[i] + 1
      }
    } else {
      map[nums[i]].count += 1
    }
  }
  var max = 0
  for (var key in map) {
    if (map[map[key].min]) {
      max = Math.max(max, map[key].count + map[map[key].min].count)
    }
    if (map[map[key].max]) {
      max = Math.max(max, map[key].count + map[map[key].max].count)
    }
  }
  return max
};
// @lc code=end
