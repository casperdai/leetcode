/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num === 0) {
    return '0'
  }
  const a = 'a'.charCodeAt()
  let target = num > 0 ? num : Math.pow(2, 32) + num
  let result = ''
  while (target > 0) {
    let diff = target % 16
    result = (diff > 9 ? String.fromCharCode(a + (diff - 10)) : diff) + result
    target = Math.floor(target / 16)
  }
  return result
};
// @lc code=end
