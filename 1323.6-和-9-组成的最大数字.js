/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
  var s = '' + num
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '6') {
      return Number(s.slice(0, i) + 9 + s.slice(i + 1))
    }
  }
  return num
};
// @lc code=end
