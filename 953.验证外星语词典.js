/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  var map = {}
  for (var i = 0; i < order.length; i++) {
    map[order[i]] = i
  }
  search: for (var i = 1; i < words.length; i++) {
    var w1 = words[i - 1]
    var w2 = words[i]
    if (w1 !== w2) {
      for (var j = 0; j < Math.min(w1.length, w2.length); j++) {
        if (w1[j] !== w2[j]) {
          if (map[w1[j]] > map[w2[j]]) {
            return false
          }
          continue search
        }
      }
      if (w2.length < w1.length) {
        return false
      }
    }
  }
  return true
};
// @lc code=end
