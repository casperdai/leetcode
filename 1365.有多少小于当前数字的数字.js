/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  var map = {};
  [...nums].sort((a, b) => a - b).forEach((val, index) => {
    if (map[val] === void 0) {
      map[val] = index
    }
  })
  return nums.map(val => map[val])
};
// @lc code=end
