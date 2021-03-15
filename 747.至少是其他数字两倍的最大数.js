/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  var index = -1
  var curr = -1
  var pre = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > curr) {
      index = i
      pre = curr
      curr = nums[i]
    } else if (nums[i] > pre) {
      pre = nums[i]
    }
  }
  return index >= 0 && curr >= pre * 2 ? index : -1
};
// @lc code=end
