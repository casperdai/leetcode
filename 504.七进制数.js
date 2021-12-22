/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) {
    return '0'
  }
  var p = num >= 0
  num = Math.abs(num)
  var result = ''
  while (num > 0) {
    result = (num % 7) + result
    num = Math.floor(num / 7)
  }
  return p ? result : '-' + result
};
// @lc code=end
