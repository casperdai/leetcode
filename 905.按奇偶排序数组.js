/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  var l = 0
  var r = A.length - 1
  while (l < r) {
    while (l < r && A[l] % 2 === 0) {
      l++
    }
    while (l < r && A[r] % 2 === 1) {
      r--
    }
    if (l !== r) {
      [A[l], A[r]] = [A[r], A[l]]
    }
    l++
    r--
  }
  return A
};
// @lc code=end
