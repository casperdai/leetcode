/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b)
  var min = Infinity
  var result = []
  for (var i = 0; i < arr.length - 1; i++) {
    var abs = Math.abs(arr[i] - arr[i + 1])
    if (abs < min) {
      min = abs
      result = [[arr[i], arr[i + 1]]]
    } else if (abs === min) {
      result.push([arr[i], arr[i + 1]])
    }
  }
  return result
};
// @lc code=end
