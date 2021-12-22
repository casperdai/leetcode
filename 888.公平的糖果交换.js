/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  var diff = (B.reduce((t, v) => t + v, 0) - A.reduce((t, v) => t + v, 0)) / 2
  var set = new Set(B)
  for (var i = 0; i < A.length; i++) {
    if (set.has(A[i] + diff)) {
      return [A[i], A[i] + diff]
    }
  }
  return null
};
// @lc code=end
