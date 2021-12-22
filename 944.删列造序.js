/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  var count = 0
  for (var i = 0; i < A[0].length; i++) {
    for (var j = 0; j < A.length - 1; j++) {
      if (A[j][i] > A[j + 1][i]) {
        count += 1
        break
      }
    }
  }
  return count
};
// @lc code=end
