/*
 * @lc app=leetcode.cn id=1704 lang=javascript
 *
 * [1704] 判断字符串的两半是否相似
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  var count = 0
  var length = s.length

  function is (val) {
    switch (val) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        return true
      default:
        return false
    }
  }

  for (var i = 0; i < length / 2; i++) {
    if (is(s[i])) {
      count += 1
    }
    if (is(s[length - 1 - i])) {
      count -= 1
    }
  }

  return count === 0
};
// @lc code=end
