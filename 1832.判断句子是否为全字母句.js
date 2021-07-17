/*
 * @lc app=leetcode.cn id=1832 lang=javascript
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  var length = sentence.length
  if (length < 26) {
    return false
  }
  var total = 26
  var map = {}
  for (var i = 0; i < length; i++) {
    var code = sentence.charCodeAt(i) - 97
    if (!map[code]) {
      map[code] = 1
      total -= 1
      if (total === 0) {
        return true
      }
    }
  }
  return total === 0
};
// @lc code=end
