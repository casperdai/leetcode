/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  var map = {}
  var index = 1
  Array.from(new Set(arr)).sort((a, b) => a - b).forEach(val => {
    map[val] = index++
  })
  return arr.map(val => map[val])
};
// @lc code=end
