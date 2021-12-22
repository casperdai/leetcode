/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  var result = ''
  var pre = null
  var index = 0
  s = s.split('').sort()
  while (s.length > 0) {
    pre = s.shift()
    result += pre
    index = 0
    while (index < s.length) {
      if (pre === s[index]) {
        index += 1
      } else {
        pre = s.splice(index, 1)[0]
        result += pre
      }
    }
    if (s.length > 0) {
      pre = s.pop()
      result += pre
      index = s.length - 1
      while (index >= 0) {
        if (pre !== s[index]) {
          pre = s.splice(index, 1)[0]
          result += pre
        }
        index -= 1
      }
    }
  }
  return result
};
// @lc code=end
