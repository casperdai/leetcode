/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  var last = 'maa'
  return S.split(' ').map(s => {
    var word
    if (s.length === 1) {
      word = s + last
    } else {
      switch (s[0]) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
          word = s + last
          break
        default:
          word = s.slice(1) + s[0] + last
          break
      }
    }
    last += 'a'
    return word
  }).join(' ')
};
// @lc code=end
