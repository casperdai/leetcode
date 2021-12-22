/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  if (A.length < 3) {
    return 0
  }
  A.sort((a, b) => a - b)
  for (var i = A.length - 1; i >= 2; i--) {
    if (A[i - 2] + A[i - 1] > A[i]) {
      return A[i] + A[i - 1] + A[i - 2]
    }
  }
  return 0
};
// @lc code=end
