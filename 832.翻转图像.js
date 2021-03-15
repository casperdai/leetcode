/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (var i = 0; i < A.length; i++) {
    var l = 0
    var r = A[i].length - 1
    while (l <= r) {
      if (l === r) {
        A[i][l] = A[i][l] ^ 1
      } else {
        [A[i][l], A[i][r]] = [A[i][r] ^ 1, A[i][l] ^ 1]
      }
      l += 1
      r -= 1
    }
  }
  return A
};
// @lc code=end
