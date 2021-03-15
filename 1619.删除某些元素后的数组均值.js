/*
 * @lc app=leetcode.cn id=1619 lang=javascript
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  arr.sort((a, b) => a - b)
  var count = Math.floor(arr.length * 0.05)
  var sum = 0
  for (var i = count; i < arr.length - count; i++) {
    sum += arr[i]
  }
  return sum / (arr.length - 2 * count)
};
// @lc code=end
