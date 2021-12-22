/*
 * @lc app=leetcode.cn id=1805 lang=javascript
 *
 * [1805] 字符串中不同整数的数目
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  var map = {}
  word.replace(/\d+/g, val => {
    map[val.replace(/^0+/, '')] = 1
    return ''
  })
  return Object.keys(map).length
};
// @lc code=end
