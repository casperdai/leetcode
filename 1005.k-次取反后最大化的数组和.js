/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  A.sort((a, b) => a - b)
  var index = 0
  while (K > 0 && index < A.length - 1 && A[index] < 0) {
    A[index] = -A[index]
    index += 1
    K--
  }
  if (K > 0 && K % 2 === 1) {
    if (index > 0 && A[index] > A[index - 1]) {
      index -= 1
    }
    A[index] = -A[index]
  }
  return A.reduce((sum, val) => sum + val, 0)
};
// @lc code=end
