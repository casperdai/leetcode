/*
 * @lc app=leetcode.cn id=1295 lang=javascript
 *
 * [1295] 统计位数为偶数的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  var count = 0
  for (var i = 0; i < nums.length; i++) {
    if (('' + nums[i]).length % 2 === 0) {
      count += 1
    }
  }
  return count
};
// @lc code=end
