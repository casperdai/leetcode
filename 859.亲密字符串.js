/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) {
    return false
  }
  if (A === B) {
    var map = {}
    for (var i = 0; i < A.length; i++) {
      if (map[A[i]]) {
        return true
      }
      map[A[i]] = true
    }
    return false
  } else {
    var first = -1
    var second = -1
    for (var i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        if (first === -1) {
          first = i
        } else if (second === -1) {
          second = i
        } else {
          return false
        }
      }
    }
    return second !== -1 && A[first] === B[second] && A[second] === B[first]
  }
};
// @lc code=end
