/*
 * @lc app=leetcode.cn id=1869 lang=javascript
 *
 * [1869] 哪种连续子字符串更长
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
  var count1 = s.match(/1+/g)
  if (!count1) {
    return false
  }
  var count0 = s.match(/0+/g)
  if (!count0) {
    return true
  }
  return Math.max(...count1.map(val => val.length)) > Math.max(...count0.map(val => val.length))
};
// @lc code=end
