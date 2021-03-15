/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  var narr = []
  var sarr = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      narr.push(s[i])
    } else {
      sarr.push(s[i])
    }
  }
  var result = ''
  if (Math.abs(sarr.length - narr.length) <= 1) {
    var f
    var sec
    if (sarr.length > narr.length) {
      result += sarr.pop()
      f = narr
      sec = sarr
    } else if (sarr.length < narr.length) {
      result += narr.pop()
      f = sarr
      sec = narr
    } else {
      f = sarr
      sec = narr
    }
    while (f.length > 0) {
      result += f.pop() + sec.pop()
    }
  }
  return result
};
// @lc code=end
