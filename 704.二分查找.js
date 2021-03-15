/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var l = 0
  var r = nums.length - 1
  while (l <= r) {
    var mid = Math.floor((l + r) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
};
// @lc code=end
