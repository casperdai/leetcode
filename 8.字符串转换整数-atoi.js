/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  var find = false
  var result = 0
  var flag = 1
  var max = Math.pow(2, 31) - 1
  var min = -(max + 1)
  for (var i = 0; i < s.length; i++) {
    if (find) {
      if (s[i] >= '0' && s[i] <= '9') {
        result *= 10
        result += s[i] * flag
        if (flag === 1 && result > max) {
          return max
        } else if (flag === -1 && result < min) {
          return min
        }
      } else {
        break
      }
    } else {
      if (s[i] === '-') {
        find = true
        flag = -1
      } else if (s[i] === '+') {
        find = true
      } else if (s[i] >= '0' && s[i] <= '9') {
        find = true
        result = s[i] * flag
      } else if (s[i] !== ' ') {
        return 0
      }
    }
  }
  return result
};
// @lc code=end
