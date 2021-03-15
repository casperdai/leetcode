/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  var sum = 0
  var n = arr.length
  for (var i = 0; i < n; i++) {
    var count = Math.ceil((n - i) / 2)
    sum += arr[i] * count
    count -= 1
    for (var j = i + 2; j < n && count > 0; j += 2) {
      sum += (arr[j] + arr[j - 1]) * count
      count -= 1
    }
  }
  return sum
};
// @lc code=end
