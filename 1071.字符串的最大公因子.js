/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 === str2 + str1) {
    var l1 = str1.length
    var l2 = str2.length
    if (l1 < l2) {
      [l1, l2] = [l2, l1]
    }
    if (l1 % l2 === 0) {
      return str1.substring(0, l2)
    }
    var n = Math.floor(l2 / 2)
    while (n > 1) {
      if (l1 % n === 0 && l2 % n === 0) {
        break
      }
      n -= 1
    }
    return str1.substring(0, n)
  }
  return ''
};
// @lc code=end
