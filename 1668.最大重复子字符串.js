/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  var regexp = new RegExp(`(${ word })+`, 'g')
  var n = word.length
  var max = 0
  var result
  while ((result = regexp.exec(sequence))) {
    max = Math.max(max, result[0].length / n)
    regexp.lastIndex -= n - 1
  }
  return max
};
// @lc code=end
