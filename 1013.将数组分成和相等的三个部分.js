/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  var sum = A.reduce((total, val) => total + val, 0)
  if (sum % 3 === 0) {
    sum /= 3
    var total = 0
    var first = true
    for (var i = 0; i < A.length; i++) {
      total += A[i]
      if (sum === total) {
        if (first) {
          first = false
          sum += sum
        } else {
          return i < A.length - 1
        }
      }
    }
  }
  return false
};
// @lc code=end
