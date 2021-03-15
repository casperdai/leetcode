/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  var sum = 0
  var i = 1
  var max = Math.sqrt(num)
  while (i < max) {
    if (num % i === 0) {
      sum += i
      if (i !== 1 && i !== max) {
        sum += num / i
      }
    }
    i += 1
  }
  return sum === num
};
// @lc code=end
