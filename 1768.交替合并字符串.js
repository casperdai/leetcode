/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  var length1 = word1.length
  var length2 = word2.length
  var index1 = 0
  var index2 = 0
  var result = ''
  while (index1 < length1 && index2 < length2) {
    result += word1[index1] + word2[index2]
    index1 += 1
    index2 += 1
  }
  if (index1 < length1) {
    result += word1.substring(index1)
  }
  if (index2 < length2) {
    result += word2.substring(index2)
  }
  return result
};
// @lc code=end
