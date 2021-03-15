/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  var result = 0
  var d = 1
  while (N > 0) {
    var diff = N % 2
    if (diff === 0) {
      result += d
    }
    d *= 2
    N = Math.floor(N / 2)
  }
  return d === 1 ? 1 : result
};
// @lc code=end
