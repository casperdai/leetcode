/*
 * @lc app=leetcode.cn id=1694 lang=javascript
 *
 * [1694] 重新格式化电话号码
 */

// @lc code=start
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  var result = ''
  var curr = 0
  for (var i = 0; i < number.length; i++) {
    var s = number[i]
    if (s !== ' ' && s !== '-') {
      if (curr === 3) {
        result += '-'
        curr = 0
      }
      result += s
      curr += 1
    }
  }
  if (curr === 1 && result.length > 1) {
    return result.slice(0, -3) + '-' + result.slice(-3).replace('-', '')
  }
  return result
};
// @lc code=end
