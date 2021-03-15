/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  if (A.length === 1) {
    return 0
  }
  var min = -1
  var max = -1
  for (var i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i]
    }
    if (min === -1 || A[i] < min) {
      min = A[i]
    }
  }
  var diff = K * 2
  return Math.max(0, max - min - diff)
};
// @lc code=end
