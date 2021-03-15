/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var result = '';
  var d;
  while (n > 0) {
    d = n % 26;
    n = Math.floor(n / 26);
    if (d === 0) {
      d = 26;
      n -= 1;
    }
    result = String.fromCharCode(64 + d) + result;
  }
  return result;
};
// @lc code=end
