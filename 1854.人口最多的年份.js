/*
 * @lc app=leetcode.cn id=1854 lang=javascript
 *
 * [1854] 人口最多的年份
 */

// @lc code=start
/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
  var nums = Array(101).fill(0)
  logs.forEach(([ birth, death ]) => {
    nums[birth - 1950] += 1
    nums[death - 1950] -= 1
  })
  var max = 0
  var curr = 0
  var year = 0
  nums.forEach((val, i) => {
    curr += val
    if (curr > max) {
      year = 1950 + i
      max = curr
    }
  })
  return year
};
// @lc code=end
