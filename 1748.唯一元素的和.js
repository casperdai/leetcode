/*
 * @lc app=leetcode.cn id=1748 lang=javascript
 *
 * [1748] 唯一元素的和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  var map = {}
  var result = 0
  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      result += nums[i]
      map[nums[i]] = true
    } else if (map[nums[i]] === true) {
      result -= nums[i]
      map[nums[i]] = 1
    }
  }
  return result
};
// @lc code=end
