/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  var map = {}
  for (var i = 0; i < banned.length; i++) {
    map[banned[i]] = true
  }
  paragraph = paragraph.toLowerCase()
  var word = ''
  var cache = {}
  var result = ''
  for (var i = 0; i < paragraph.length; i++) {
    if (paragraph[i] >= 'a' && paragraph[i] <= 'z') {
      word += paragraph[i]
      if (i < paragraph.length - 1) {
        continue
      }
    }
    if (word !== '' && !map[word]) {
      cache[word] = (cache[word] || 0) + 1
      if (!result || cache[word] > cache[result]) {
        result = word
      }
    }
    word = ''
  }
  return result
};
// @lc code=end
