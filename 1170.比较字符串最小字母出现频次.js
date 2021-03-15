/*
 * @lc app=leetcode.cn id=1170 lang=javascript
 *
 * [1170] 比较字符串最小字母出现频次
 */

// @lc code=start
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  function getCount (s) {
    var count = 0
    var min = Infinity
    for (var i = 0; i < s.length; i++) {
      var code = s.charCodeAt(i)
      if (code < min) {
        min = code
        count = 1
      } else if (code === min) {
        count += 1
      }
    }
    return count
  }
  words = words.map(getCount).sort((a, b) => b - a)
  return queries.map(val => {
    var count = getCount(val)
    var index = words.findIndex(v => v <= count)
    return index === -1 ? words.length : index
  })
};
// @lc code=end
