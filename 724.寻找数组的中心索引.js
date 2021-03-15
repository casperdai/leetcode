/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  var sum = nums.reduce((total, val) => total + val, 0)
  var lsum = 0
  for (var i = 0; i < nums.length; i++) {
    if (sum - nums[i] === lsum * 2) {
      return i
    }
    lsum += nums[i]
  }
  return -1
};
// @lc code=end
