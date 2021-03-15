/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  var l = 0
  var r = S.length
  var result = []
  for (var i = 0; i < S.length; i++) {
    if (S[i] === 'I') {
      result.push(l)
      l += 1
    } else {
      result.push(r)
      r -= 1
    }
  }
  result.push(l)
  return result
};
// @lc code=end
