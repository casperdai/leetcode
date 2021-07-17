/*
 * @lc app=leetcode.cn id=1816 lang=javascript
 *
 * [1816] 截断句子
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  var regex = '[a-z]+(\\s+[a-z]+){' + (k - 1) + '}'
  return new RegExp(regex, 'i').exec(s)[0]
};
// @lc code=end
