/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  var result = ''
  var count = 0
  for (var i = 0; i < S.length; i++) {
    switch (S[i]) {
      case '(':
        if (count !== 0) {
          result += S[i]
        }
        count += 1
        break
      case ')':
        count -= 1
        if (count !== 0) {
          result += S[i]
        }
        break
      default:
        break
    }
  }
  return result
};
// @lc code=end
