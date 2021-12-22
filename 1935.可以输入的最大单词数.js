/*
 * @lc app=leetcode.cn id=1935 lang=javascript
 *
 * [1935] 可以输入的最大单词数
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  var brokenLength = brokenLetters.length
  if (brokenLength === 26) {
    return 0
  }
  var words = text.split(' ')
  if (brokenLength === 0) {
    return words.length
  }
  var map = {}
  for (var i = 0; i < brokenLength; i++) {
    map[brokenLetters[i]] = 1
  }
  var count = 0
  a: for (var i = 0; i < words.length; i++) {
    var word = words[i]
    for (var j = 0; j < word.length; j++) {
      if (map[word[j]]) {
        continue a
      }
    }
    count += 1
  }
  return count
};
// @lc code=end
