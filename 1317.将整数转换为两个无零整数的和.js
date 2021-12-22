/*
 * @lc app=leetcode.cn id=1317 lang=javascript
 *
 * [1317] 将整数转换为两个无零整数的和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  var a = ''
  var b = ''
  while (n) {
    var diff = n % 10
    if (diff <= 1) {
      if (n > 9) {
        n -= 10
        a = 9 + a
        b = diff + 1 + b
      } else {
        a = diff + a
      }
    } else {
      a = (diff - 1) + a
      b = 1 + b
    }
    n = Math.floor(n / 10)
  }
  return [Number(a), Number(b)]
};
// @lc code=end
