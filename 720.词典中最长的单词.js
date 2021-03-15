/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort()
  var map = {}
  var result = ''
  for (var i = 0; i < words.length; i++) {
    if (words[i].length === 1 || map[words[i].slice(0, -1)]) {
      map[words[i]] = true
      if (words[i].length > result.length) {
        result = words[i]
      }
    }
  }
  return result
};
// @lc code=end
