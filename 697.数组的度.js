/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  var map = {}
  var result = { count: 0, length: 0 }
  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = {
        val: nums[i],
        count: 0,
        left: i
      }
    }
    map[nums[i]].length = i - map[nums[i]].left + 1
    map[nums[i]].count += 1
    if (map[nums[i]].count > result.count) {
      result.count = map[nums[i]].count
      result.length = map[nums[i]].length
    } else if (map[nums[i]].count === result.count) {
      result.length = Math.min(map[nums[i]].length, result.length)
    }
  }
  return result.length
};
// @lc code=end
