/*
 * @lc app=leetcode.cn id=1550 lang=javascript
 *
 * [1550] 存在连续三个奇数的数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  var l = 0
  while (l < arr.length - 2) {
    if (arr[l] & 1) {
      if (arr[l + 1] & 1) {
        if (arr[l + 2] & 1) {
          return true
        }
        l += 3
      } else {
        l += 2
      }
    } else {
      l += 1
    }
  }
  return false
};
// @lc code=end
