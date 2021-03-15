/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var word = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var index = 0
  var result = ''
  while (num) {
    if (num >= val[index]) {
      result += word[index]
      num -= val[index]
    } else {
      index += 1
    }
  }
  return result
};
// @lc code=end
