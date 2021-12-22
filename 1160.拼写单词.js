/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  var map = []
  for (var i = 0; i < chars.length; i++) {
    var code = chars.charCodeAt(i) - 97
    if (!map[code]) {
      map[code] = 1
    } else {
      map[code] += 1
    }
  }
  var sum = 0
  count: for (var i = 0; i < words.length; i++) {
    var need = {}
    for (var j = 0; j < words[i].length; j++) {
      var code = words[i].charCodeAt(j) - 97
      if (!need[code]) {
        need[code] = 1
      } else {
        need[code] += 1
      }
      if (!map[code] || need[code] > map[code]) {
        continue count
      }
    }
    sum += words[i].length
  }
  return sum
};
// @lc code=end
