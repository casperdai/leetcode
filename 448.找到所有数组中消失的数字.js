/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result = []
  for (var i = 0; i < nums.length; i++) {
    let target = Math.abs(nums[i]) - 1
    if (nums[target] > 0) {
      nums[target] *= -1
    }
  }
  for (var j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
      result.push(j + 1)
    }
  }
  return result
};
// @lc code=end
