/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let index1 = num1.length - 1
  let index2 = num2.length - 1
  let result = ''
  let has = false
  while (index1 >= 0 || index2 >= 0) {
    let s1 = Number(num1[index1] || 0)
    let s2 = Number(num2[index2] || 0)
    let target = s1 + s2
    if (has) {
      target += 1
    }
    has = target > 9
    result = (target % 10) + result
    index1 -= 1
    index2 -= 1
  }
  if (has) {
    result = '1' + result
  }
  return result
};
// @lc code=end
