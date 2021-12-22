/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  var index = A.length - 1
  while (K) {
    var val = K % 10
    K = Math.floor(K / 10)
    if (index < 0) {
      A.unshift(val)
    } else {
      val = val + A[index]
      if (val >= 10) {
        K += 1
        A[index] = val % 10
      } else {
        A[index] = val
      }
      index -= 1
    }
  }
  return A
};
// @lc code=end
