/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  var result = []
  var val = 0
  for (var i = 0; i < A.length; i++) {
    result.push((val + A[i]) % 5 === 0)
    val = result[i] ? 0 : (val + A[i]) * 2 % 5
  }
  return result
};
// @lc code=end
