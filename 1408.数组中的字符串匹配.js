/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  return words.filter(i => words.some(j => i !== j && j.includes(i)))
};
// @lc code=end
