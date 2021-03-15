/*
 * @lc app=leetcode.cn id=1512 lang=javascript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  var map = {}
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1
    } else {
      map[nums[i]] = 1
    }
  }
  return Object.values(map).reduce((total, val) => total + val * (val - 1) / 2, 0)
};
// @lc code=end
