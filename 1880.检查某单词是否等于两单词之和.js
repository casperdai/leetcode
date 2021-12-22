/*
 * @lc app=leetcode.cn id=1880 lang=javascript
 *
 * [1880] 检查某单词是否等于两单词之和
 */

// @lc code=start
/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  function count (s) {
    var val = 0
    var scale = 1
    for (var i = s.length - 1; i >= 0; i--) {
      val += (s.charCodeAt(i) - 97) * scale
      scale *= 10
    }
    return val
  }
  return count(firstWord) + count(secondWord) === count(targetWord)
};
// @lc code=end
