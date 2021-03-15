/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  var count = 0
  var word = []
  var s = ''
  for (var i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      count += 1
      if (s) {
        word.push(s)
        s = ''
      }
    } else {
      s += text[i]
    }
  }
  if (count === 0) {
    return text
  }
  if (s) {
    word.push(s)
  }
  if (word.length === 1) {
    return word[0].padEnd(text.length, ' ')
  }
  var empty = Math.floor(count / (word.length - 1))
  var gap = ''
  for (var i = 0; i < empty; i++) {
    gap += ' '
  }
  var diff = ''
  for (var i = 0; i < count - empty * (word.length - 1); i++) {
    diff += ' '
  }
  return word.join(gap) + diff
};
// @lc code=end
