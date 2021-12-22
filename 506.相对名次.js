/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var result = []
  nums.map((num, i) => [num, i]).sort((a, b) => b[0] - a[0]).forEach((val, i) => {
    var t
    switch (i) {
      case 0:
        t = 'Gold Medal'
        break
      case 1:
        t = 'Silver Medal'
        break
      case 2:
        t = 'Bronze Medal'
        break
      default:
        t = '' + (i + 1)
        break
    }
    result[val[1]] = t
  })
  return result
};
// @lc code=end
