/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  var j = 1
  for (var i = 0; i < A.length; i += 2) {
    if (A[i] % 2 === 1) {
      while (A[j] % 2 === 1) {
        j += 2
      }
      [A[i], A[j]] = [A[j], A[i]]
      j += 2
    }
  }
  return A
};
// @lc code=end
