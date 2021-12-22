/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  var min = -Infinity
  var max = min
  var second = min
  var third = min
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      third = second
      second = max
      max = nums[i]
    } else if (nums[i] < max) {
      if (nums[i] > second) {
        third = second
        second = nums[i]
      } else if (nums[i] < second) {
        if (nums[i] > third) {
          third = nums[i]
        }
      }
    }
  }
  return third === min ? max : third
};
// @lc code=end
