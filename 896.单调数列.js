/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  var b1 = true
  var b2 = true
  for (var i = 1; i < A.length; i++) {
    if (b1 && A[i] < A[i - 1]) {
      b1 = false
    }
    if (b2 && A[i] > A[i - 1]) {
      b2 = false
    }
    if (!b1 && !b2) {
      return false
    }
  }
  return true
};
// @lc code=end
