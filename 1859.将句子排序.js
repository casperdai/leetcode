/*
 * @lc app=leetcode.cn id=1859 lang=javascript
 *
 * [1859] 将句子排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  return s.match(/[a-z]+\d/gi).map(val => {
    return {
      i: Number(val.slice(-1)),
      w: val.slice(0, -1)
    }
  }).sort((a, b) => a.i - b.i).map(val => val.w).join(' ')
};
// @lc code=end
