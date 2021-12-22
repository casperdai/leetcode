/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  for (var i = 1; i <= 3; i++) {
    for (var j = 0; j < A.length - i; j++) {
      if (A[j] == A[j + i]) {
        return A[j]
      }
    }
  }
  return null
};
// @lc code=end
