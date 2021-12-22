/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  s = s.split('')
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '?') {
      var next = i + 1
      while (s[next] === '?') {
        next += 1
      }
      for (var j = i; j < next; j++) {
        switch (s[j - 1]) {
          case 'a':
            s[j] = s[j + 1] === 'b' ? 'c' : 'b'
            break
          case 'b':
            s[j] = s[j + 1] === 'a' ? 'c' : 'a'
            break
          default:
            s[j] = s[j + 1] === 'a' ? 'b' : 'a'
            break
        }
      }
      i = next
    }
  }
  return s.join('')
};
// @lc code=end
