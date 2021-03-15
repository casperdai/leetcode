/*
 * @lc app=leetcode.cn id=1534 lang=javascript
 *
 * [1534] 统计好三元组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
  var sum = 0
  for (var j = 1; j < arr.length - 1; j++) {
    for (var k = j + 1; k < arr.length; k++) {
      if (Math.abs(arr[j] - arr[k]) <= b) {
        for (var i = 0; i < j; i++) {
          if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[i] - arr[k]) <= c) {
            sum += 1
          }
        }
      }
    }
  }
  return sum
};
// @lc code=end
